import { Resolver, Query, Ctx } from 'type-graphql';
import { Context } from '../../types/Context';

import { User } from '../../models/User';

@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() context: Context): Promise<User | undefined> {
    if (!context.req.session!.userId) {
      return undefined;
    }

    return User.findOne(context.req.session!.userId);
  }
}
