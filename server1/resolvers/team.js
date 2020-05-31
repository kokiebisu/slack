const formatErrors = require('../util/formatErrors');
const { requiresAuth } = require('../authentication/permissions');

module.exports = {
  Query: {
    allTeams: requiresAuth.createResolver(
      async (parent, args, { models, user }) => {
        try {
          await models.Team.findAll({ owner: user.id }, { raw: true });
        } catch (err) {
          return {
            ok: false,
            errors: formatErrors(err, modelss),
          };
        }
      }
    ),
  },
  Mutation: {
    createTeam: requiresAuth.createResolver(
      async (parent, args, { models, user }) => {
        try {
          await models.Team.create({ ...args, owner: user.id });
          return {
            ok: true,
          };
        } catch (err) {
          return {
            ok: false,
            errors: formatErrors(err, models),
          };
        }
      }
    ),
  },
};
