const bcrypt = require('bcrypt');

// Helper
const createTokens = require('./createtokens');

module.exports = async (email, password, models, secret, secret2) => {
  const user = await models.User.findOne({ where: { email }, raw: true });
  if (!user) {
    return {
      ok: false,
      errors: [{ path: 'email', message: 'Wrong email' }],
    };
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return {
      ok: false,
      errors: [{ path: 'password', message: 'Wrong password' }],
    };
  }

  const refreshTokenSecret = user.password + secret2;

  const [token, refreshToken] = await createTokens(
    user,
    secret,
    refreshTokenSecret
  );

  return {
    ok: true,
    token,
    refreshToken,
  };
};
