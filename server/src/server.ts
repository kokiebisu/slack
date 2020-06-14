require('dotenv').config();
import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import Express from 'express';

import { buildSchema } from 'type-graphql';

import { createConnection } from 'typeorm';

import session from 'express-session';

import cors from 'cors';
import connectRedis from 'connect-redis';
import cookieParser from 'cookie-parser';

import { Request, Response, NextFunction } from 'express';
import { redis } from './redis';

import { router as tokenRouter } from './routes/tokenRoutes';
import { createUsersLoader } from './util/usersLoader';

const allowCrossDomain = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
};

(async () => {
  await createConnection();

  const app = Express();

  app.use(cookieParser());

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [__dirname + '/graphql/**/*.ts'],
    }),
    // Enable adding cookies to the session
    context: ({ req, res }: any) => ({
      req,
      res,
      membersLoader: createUsersLoader(),
    }),
  });

  app.use(allowCrossDomain);

  app.use('/refresh_token', tokenRouter);

  const RedisStore = connectRedis(session);

  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
    })
  );

  // Session will be added to the request object
  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      // cookie
      name: 'qid',
      secret: 'secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        // javascript can't access
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
    })
  );

  const PORT = process.env.PORT || 4000;

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})();
