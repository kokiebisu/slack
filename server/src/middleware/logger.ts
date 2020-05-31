import { MiddlewareFn } from 'type-graphql';
import { Context } from '../types/Context';

export const logger: MiddlewareFn<Context> = ({ context }, next) => {
  console.log(context);

  return next();
};
