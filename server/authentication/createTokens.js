const jwt = require('jsonwebtoken');
const _ = require('lodash');

module.exports = (user, secret, refreshSecret) => {
  const createToken = jwt.sign(
    {
      user: _.pick(user, ['id']),
    },
    secret,
    { expiresIn: '1m' }
  );

  const createRefreshToken = jwt.sign(
    {
      user: _.pick(user, 'id'),
    },
    refreshSecret,
    {
      expiresIn: '7d',
    }
  );

  return [createToken, createRefreshToken];
};
