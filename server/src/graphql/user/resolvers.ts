import { Query, Resolver } from 'type-graphql';
import { User } from '../../models/User';

@Resolver()
export class UsersResolver {
  @Query(() => [User])
  async users() {
    const users = await User.find();
    return users;
  }
}
