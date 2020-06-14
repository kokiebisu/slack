import { Query, Ctx, Resolver, UseMiddleware } from 'type-graphql';
import { Context } from '../../interface/context';
import { User } from '../../models/User';
import { isAuth } from '../../middleware/isAuthenticated';
import { UserResponse } from '../response/userResponse';
import { getConnection } from 'typeorm';

@Resolver()
export class MeResolver {
  @UseMiddleware(isAuth)
  @Query(() => UserResponse)
  async me(@Ctx() { req }: Context): Promise<UserResponse | Error> {
    try {
      const userId = req.session!.userId;

      const user = await User.findOne(userId);

      if (!user) {
        return {
          ok: false,
          user: null,
          message: 'user was not found',
        };
      }

      return {
        ok: true,
        user,
      };
    } catch (err) {
      throw new Error('something wrong happened');
    }
  }
}
