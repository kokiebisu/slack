import { MiddlewareFn } from 'type-graphql';
import { Context } from '../interface/context';

export const isAuth: MiddlewareFn<Context> = async ({ context }, next) => {
  if (!context.req.session!.userId) {
    throw new Error('cannot extract userid from session');
  }
  return next();
};
