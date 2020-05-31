import { MiddlewareFn } from 'type-graphql';
import { Context } from '../types/context';
import { verify } from 'jsonwebtoken';

export const isAuth: MiddlewareFn<Context> = async ({ context }, next) => {
  const authorization = context.req.headers['authorization'];

  if (!authorization) {
    throw new Error('You are not authenticated!!');
  }

  try {
    const token = authorization?.split(' ')[1];
    // Returns the data that was initially set using the sign method
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);

    context.payload = payload as any;
  } catch (err) {
    console.log(err);
    throw new Error('Wrong token');
  }

  return next();
};
