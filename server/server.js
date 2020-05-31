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
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, '/schemas')));

// Resolvers
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, '/resolvers'))
);

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

const addUser = async (req, res, next) => {
  const token = req.headers['token'];
  if (token) {
    try {
      const { user } = jwt.verify(token, secret);
      req.user = user;
    } catch (err) {
      const refreshToken = req.header['refreshToken'];
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
    next();
  }
};

app.use(cors('*'));
app.use(express.json());
app.use(addUser);

server.applyMiddleware({ app });

models.sequelize
  .sync()
  .then(() => {
    app.listen({ port: 4000 }, () => {
      console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
    });
  })
  .catch((err) => console.log(err));
