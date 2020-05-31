import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import Express from 'express';

import { buildSchema } from 'type-graphql';

import { createConnection } from 'typeorm';

import session from 'express-session';
import { redis } from './redis';
import cors from 'cors';
import connectRedis from 'connect-redis';

// Resolver
import { RegisterResolver } from './graphql/user/Register';
import { LoginResolver } from './graphql/user/Login';
import { MeResolver } from './graphql/user/Me';
import { ConfirmLoginResolver } from './graphql/user/ConfirmLogin';

const main = async () => {
  await createConnection();

  const app = Express();

  const schema = await buildSchema({
    resolvers: [
      RegisterResolver,
      LoginResolver,
      MeResolver,
      ConfirmLoginResolver,
    ],
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }: any) => ({ req }),
  });

  const RedisStore = connectRedis(session);

  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
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
        httpOnly: true,
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
};

main();
