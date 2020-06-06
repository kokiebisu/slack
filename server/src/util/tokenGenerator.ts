import { User } from '../models/User';
import { sign, verify } from 'jsonwebtoken';

export const createAccessToken = (user: User) => {
  return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: '1h',
  });
};

export const createRefreshToken = (user: User) => {
  return sign(
    { userId: user.id, tokenVersion: user.tokenVersion },
    process.env.REFRESH_TOKEN_SECRET!,
    {
      expiresIn: '7d',
    }
  );
};

export const createDigitToken = (digit: number, user: User) => {
  return sign(
    { userId: user.id },
    `${digit}${process.env.ACCESS_TOKEN_SECRET!}`,
    { expiresIn: '1h' }
  );
};

export const getDigitToken = (token: string, digit: number) => {
  return verify(token, `${digit}${process.env.ACCESS_TOKEN_SECRET}`);
};
