import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import { User } from '../../models/User';
import { Context } from '../../types/Context';
import { redis } from '../../redis';
import { confirmationPrefix } from '../../constants/redisPrefixes';

@Resolver()
export class ConfirmLoginResolver {
  @Mutation(() => Boolean)
  async confirmUser(
    @Arg('token') token: string,
    @Ctx() context: Context
  ): Promise<boolean> {
    const userId = await redis.get(confirmationPrefix + token);

    if (!userId) {
      return false;
    }

    User.update({ id: parseInt(userId, 10) }, { confirmed: true });

    await redis.del(token);

    return true;
  }
}
