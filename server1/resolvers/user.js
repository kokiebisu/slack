const validateLogin = require('../authentication/validatelogin');

const formatErrors = require('../util/formatErrors');

module.exports = {
  Query: {
    getUser: (parent, { id }, { models }) =>
      models.User.findOne({ where: { id } }),
    allUsers: (parent, args, { models }) => models.User.findAll(),
  },
  Mutation: {
    register: async (parent, args, { models }) => {
      try {
        const user = await models.User.create(args);
        return {
          ok: true,
          user,
        };
      } catch (err) {
        return {
          ok: false,
          errors: formatErrors(err, models),
        };
      }
    },
    login: async (parent, { email, password }, { models, secret, secret2 }) =>
      validateLogin(email, password, models, secret, secret2),
  },
};
