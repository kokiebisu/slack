import { MiddlewareFn } from 'type-graphql';
import { Context } from '../interface/context';
import { User } from 'src/models/User';

export const isConfirmed: MiddlewareFn<Context> = async ({ context }, next) => {
  try {
    const user = await User.findOne(context.req.session!.userId);
    if (!user?.confirmed) {
      return {
        ok: false,
        errorlog: "you haven't confirmed via email",
        user: null,
      };
    }
    return next();
  } catch (err) {
    return {
      ok: false,
      errorlog: "wasn't able to find user",
    };
  }
};
