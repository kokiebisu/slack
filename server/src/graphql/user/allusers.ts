import { Query, Resolver } from 'type-graphql';
import { UsersResponse } from '../response/userResponse';
import { getManager } from 'typeorm';

const manager = getManager();

@Resolver()
export class UsersResolver {
  @Query(() => UsersResponse)
  async allUsers(): Promise<UsersResponse | Error> {
    try {
      const users = await manager.query(
        'select u.id, u.fullname from members m inner join users u on m."userId" = u.id'
      );
      return {
        ok: true,
        users,
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
