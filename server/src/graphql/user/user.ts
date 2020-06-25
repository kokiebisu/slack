import { Query, Ctx, Resolver, UseMiddleware, Arg } from 'type-graphql';
import { Context } from '../../interface/context';
import { User } from '../../models/User';
import { isAuth } from '../../middleware/isAuthenticated';
import { UserResponse } from '../response/userResponse';
import { getConnection } from 'typeorm';

@Resolver()
export class UserResolver {
  @UseMiddleware(isAuth)
  @Query(() => UserResponse)
  async user(@Arg('userId') userId: string): Promise<UserResponse | Error> {
    try {
      const user = await User.findOne(userId);

      if (!user) {
        return {
          ok: false,
          errorlog: 'user was not found',
          user: null,
        };
      }

      return {
        ok: true,
        user,
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
