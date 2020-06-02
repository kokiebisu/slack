import { MiddlewareFn } from 'type-graphql';
import { Context } from '../interface/context';

export const logger: MiddlewareFn<Context> = ({ context }, next) => {
  console.log(context);

  return next();
};
