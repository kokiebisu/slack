import { Query, Resolver, Ctx, UseMiddleware } from 'type-graphql';
import { User } from '../models/User';
import { Context } from '../types/context';
import { isAuth } from '../middleware/isAuthenticated';

@Resolver()
export class UsersResolver {
  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [User])
  async users() {
    const users = await User.find();
    return users;
  }

  @UseMiddleware(isAuth)
  @Query(() => String)
  async bye(@Ctx() { payload }: Context): Promise<string> {
    return `your user id is ${payload!.userId}`;
  }
}
