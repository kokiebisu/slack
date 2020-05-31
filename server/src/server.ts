import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';

import { buildSchema } from 'type-graphql';

import { createConnection } from 'typeorm';

import { RegisterResolver } from './graphql/user/Register';

const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [RegisterResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  const app = Express();
  const PORT = process.env.PORT || 4000;

  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost${PORT}`);
  });
};

main();
