import { Query, Ctx, Resolver, UseMiddleware } from 'type-graphql';
import { Context } from '../../interface/context';
import { User } from '../../models/User';
import { isAuth } from '../../middleware/isAuthenticated';
import { UserResponse } from '../response/userResponse';

@Resolver()
export class MeResolver {
  @UseMiddleware(isAuth)
  @Query(() => UserResponse)
  async me(@Ctx() { req }: Context): Promise<UserResponse> {
    try {
      const userId = req.session!.userId;
      const user = await User.findOne(userId);

      if (!user) {
        return {
          ok: false,
          message: 'cannot find user',
          user: null,
        };
      }

      return {
        ok: true,
        user,
      };
    } catch (err) {
      return {
        ok: false,
        message: 'error occured when finding user',
        user: null,
      };
    }
  }
}
