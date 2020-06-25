import { Query, Resolver, Arg } from 'type-graphql';
import { User } from '../../models/User';
import { UsersResponse } from '../response/userResponse';
import { getManager } from 'typeorm';

const manager = getManager();

@Resolver()
export class UsersResolver {
  @Query(() => UsersResponse)
  async users(@Arg('teamId') teamId: string): Promise<UsersResponse | Error> {
    try {
      const users = await manager.query(
        'select u.id, u.fullname from members m inner join users u on m."userId" = u.id where m."teamId"=$1',
        [teamId]
      );
      return {
        ok: true,
        users,
      };
    } catch (err) {
      throw new Error('error occured when finding users');
    }
  }
}
