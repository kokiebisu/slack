require('dotenv').config();
import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import Express from 'express';

import { buildSchema } from 'type-graphql';

import { createConnection } from 'typeorm';

import session from 'express-session';
import { redis } from './redis';
import cors from 'cors';
import connectRedis from 'connect-redis';
import { Context } from './types/context';
import cookieParser from 'cookie-parser';

import { verify } from 'jsonwebtoken';
import { User } from './models/User';
import { createAccessToken, createRefreshToken } from './util/tokenGenerator';
import { Team } from './models/Team';

(async () => {
  await createConnection();

  const app = Express();

  app.use(cookieParser());

  /**
   * Retrieves a new access token based on the given refresh token
   */
  app.post('/refresh_token', async (req, res) => {
    const token = req.cookies.rtoken;

    if (!token) {
      return res.send({ ok: false, accessToken: '' });
    }

    let payload: any = null;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
    } catch (err) {
      console.log(err);
      return res.send({ ok: false, accessToken: '' });
    }

    const user = await User.findOne({ id: payload.userId });

    if (!user) {
      return res.send({ ok: false, accessToken: '' });
    }

    if (user.tokenVersion !== payload.tokenVersion) {
      return res.send({ ok: false, accessToken: '' });
    }

    res.cookie('rtoken', createRefreshToken(user), { httpOnly: true });

    return res.send({ ok: true, accessToken: createAccessToken(user) });
  });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [__dirname + '/graphql/*.ts'],
    }),
    context: ({ req, res }: Context) => ({ req, res }),
  });

  // const RedisStore = connectRedis(session);

  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
    })
  );

  // app.use(
  //   session({
  //     store: new RedisStore({
  //       client: redis as any,
  //     }),
  //     name: 'qid',
  //     secret: 'secret',
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: {
  //       // httpOnly: true,
  //       secure: process.env.NODE_ENV === 'production',
  //       maxAge: 1000 * 60 * 60 * 24 * 7,
  //     },
  //   })
  // );

  const PORT = process.env.PORT || 4000;

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost${PORT}`);
  });
})();
