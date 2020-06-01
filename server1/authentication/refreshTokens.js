const { jwt } = require('jsonwebtoken');
const createTokens = require('./createtokens');

module.exports = async (token, refreshToken, models, secret, secret2) => {
  let userId = 0;
  try {
    const {
      user: { id },
    } = jwt.decode(refreshToken);
    userId = id;
  } catch (err) {
    return {};
  }

  if (!userId) {
    return {};
  }

  const user = await models.User.findOne({ where: { id: userId }, raw: true });

  if (!user) {
    return {};
  }

  const refreshSecret = user.password + secret2;

  try {
    jwt.verify(refreshToken, refreshSecret);
  } catch (err) {
    return {};
  }

  const [newToken, newRefreshToken] = await createTokens(
    user,
    secret,
    refreshSecret
  );

  return {
    token: newToken,
    refreshToken: newRefreshToken,
    user,
  };
};
