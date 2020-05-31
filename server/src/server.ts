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

(async () => {
  await createConnection();

  const app = Express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [__dirname + '/graphql/**/*.ts'],
    }),
    context: ({ req, res }: Context) => ({ req, res }),
  });

  const RedisStore = connectRedis(session);

  app.use(
    cors({
      credentials: true,
      // origin: 'http://localhost:3000/',
    })
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: 'qid',
      secret: 'secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        // httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
    })
  );

  const PORT = process.env.PORT || 4000;

  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost${PORT}`);
  });
})();
