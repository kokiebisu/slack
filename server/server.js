const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const jwt = require('jsonwebtoken');

const refreshTokens = require('./authentication/refreshTokens');

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

const addUser = async (req, res, next) => {
  const token = req.headers['token'];
  if (token) {
    try {
      const { user } = jwt.verify(token, secret);
      req.user = user;
    } catch (err) {
      const refreshToken = req.header['refreshtoken'];

      const newTokens = await refreshTokens(
        token,
        refreshToken,
        models,
        secret,
        secret2
      );
      if (newTokens.token && newTokens.refreshToken) {
        res.set('Access-Control-Expose-Headers', 'token, refreshToken');
        res.set('token', newTokens.token);
        res.set('refreshToken', newTokens.refreshToken);
      }
    }
  }
  next();
};

app.use(addUser);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const user = req.user;
    return { models, user, secret, secret2 };
  },
  introspection: true,
});

app.use(express.json());
app.use(cors('*'));

server.applyMiddleware({ app });

models.sequelize
  .sync()
  .then(() => {
    app.listen({ port: 4000 }, () => {
      console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
    });
  })
  .catch((err) => console.log(err));
