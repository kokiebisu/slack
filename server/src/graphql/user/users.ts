import { Query, Resolver } from 'type-graphql';
import { User } from '../../models/User';
import { UsersResponse } from '../response/userResponse';

@Resolver()
export class UsersResolver {
  @Query(() => UsersResponse)
  async users(): Promise<UsersResponse | Error> {
    try {
      const users = await User.find();
      return {
        ok: true,
        users,
      };
    } catch (err) {
      throw new Error('error occured when finding users');
    }
  }
}
