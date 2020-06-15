/**
 * Retrieves a new access token based on the given refresh token
 */
import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { User } from '../models/User';
import { createRefreshToken, createAccessToken } from '../util/tokenGenerator';

export const refreshToken = async (req: Request, res: Response) => {
  const token = req.cookies.rtoken;

  if (!token) {
    return res.send({
      ok: false,
      errorlog: 'token not found from cookies',
      accessToken: '',
    });
  }

  let payload: any = null;

  try {
    payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
  } catch (err) {
    return res.send({
      ok: false,
      errorlog: 'cannot verify your token',
      accessToken: '',
    });
  }

  const user = await User.findOne({ id: payload.userId });

  if (!user) {
    return res.send({
      ok: false,
      error: 'cannot find user by the given payload',
      accessToken: '',
    });
  }

  if (user.tokenVersion !== payload.tokenVersion) {
    return res.send({
      ok: false,
      errorlog: 'you have an invalid token',
      accessToken: '',
    });
  }

  // Reattached renewed refresh token
  res.cookie('rtoken', createRefreshToken(user), { httpOnly: true });

  // Sends back a new access token
  return res.send({ ok: true, accessToken: createAccessToken(user) });
};
