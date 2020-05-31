import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { User } from '../../models/User';

import bcrypt from 'bcryptjs';
import { Context } from '../../types/Context';

@Resolver()
export class LoginResolver {
  @Mutation(() => User, { nullable: true })
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() context: Context
  ): Promise<User | null> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return null;
    }

    if (!user.confirmed) {
      return null;
    }

    // Add a userId property to the session
    context.req.session!.userId = user.id;

    return user;
  }
}
