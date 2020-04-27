const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const jwt = require('jsonwebtoken');

// Cors
const cors = require('cors');

// Models
const models = require('./models');

const {
  fileLoader,
  mergeResolvers,
  mergeTypes,
} = require('merge-graphql-schemas');

// Schemas
const schemaTypes = fileLoader(path.join(__dirname, '/schemas'));
const typeDefs = mergeTypes(schemaTypes);

// Resolvers
const resolverTypes = fileLoader(path.join(__dirname, '/resolvers'));
const resolvers = mergeResolvers(resolverTypes);

const app = express();

const secret = 'slack';
const secret2 = 'slack2';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const user = req.user;
    return { models, user, secret, secret2 };
  },
  introspection: true,
});

app.use(cors());

server.applyMiddleware({ app });

models.sequelize
  .sync()
  .then(() => {
    app.listen({ port: 4000 }, () => {
      console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
    });
  })
  .catch((err) => console.log(err));
