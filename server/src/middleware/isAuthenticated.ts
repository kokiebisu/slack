import { MiddlewareFn } from 'type-graphql';
import { Context } from '../interface/context';

export const isAuth: MiddlewareFn<Context> = async ({ context }, next) => {
  if (!context.req.session!.userId) {
    return {
      ok: false,
      errorlog: 'cannot extract userid from session',
      user: null,
    };
  }
  return next();
};
