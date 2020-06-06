import { Query, Resolver } from 'type-graphql';
import { User } from '../../models/User';
import { UsersResponse } from '../response/userResponse';

@Resolver()
export class UsersResolver {
  @Query(() => UsersResponse)
  async users(): Promise<UsersResponse> {
    try {
      const users = await User.find();
      return {
        ok: true,
        users,
      };
    } catch (err) {
      return {
        ok: false,
        message: 'error occured when finding users',
        users: null,
      };
    }
  }
}
