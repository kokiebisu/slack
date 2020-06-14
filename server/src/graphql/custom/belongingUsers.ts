import { Query, Arg } from 'type-graphql';
import { BelongingUsersResponse } from '../response/belongingUsersResponse';
import { getManager } from 'typeorm';

const manager = getManager();

export class BelongingUsersResolver {
  @Query(() => BelongingUsersResponse)
  async getBelongingUsers(
    @Arg('channelId') channelId: string
  ): Promise<BelongingUsersResponse | Error> {
    try {
      const users = await manager.query(
        'select * from channel_members where "channelId" = $1',
        [channelId]
      );
      return {
        ok: true,
        belongingUsers: users,
      };
    } catch (err) {
      throw new Error('something wrong happened with getBelongingUsers query');
    }
  }
}
