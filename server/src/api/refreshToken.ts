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
      accessToken: '',
      message: 'token not found from cookies',
    });
  }

  let payload: any = null;

  try {
    payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
  } catch (err) {
    console.log(err);
    return res.send({
      ok: false,
      accessToken: '',
      message: 'cannot verify your token',
    });
  }

  const user = await User.findOne({ id: payload.userId });

  if (!user) {
    return res.send({
      ok: false,
      accessToken: '',
      message: 'cannot find user by the given payload',
    });
  }

  if (user.tokenVersion !== payload.tokenVersion) {
    return res.send({
      ok: false,
      accessToken: '',
      message: 'you have an invalid token',
    });
  }

  // Reattached renewed refresh token
  res.cookie('rtoken', createRefreshToken(user), { httpOnly: true });

  // Sends back a new access token
  return res.send({ ok: true, accessToken: createAccessToken(user) });
};
