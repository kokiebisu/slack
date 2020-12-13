import { MiddlewareFn } from "type-graphql";
import { Context } from "../types";
import { User } from "../entity/user";

export const isConfirmed: MiddlewareFn<Context> = async ({ context }, next) => {
  try {
    const user = await User.findOne(context.req.session!.userId);
    if (!user?.confirmed) {
      return null;
    }
    return next();
  } catch (err) {
    throw new Error(err);
  }
};
