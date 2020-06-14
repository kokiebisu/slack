import { Query, Arg } from 'type-graphql';
import { BelongingTeamsResponse } from '../response/belongingTeamsResponse';
import { getManager } from 'typeorm';

const manager = getManager();

export class BelongingTeamsResolver {
  @Query(() => BelongingTeamsResponse)
  async getBelongingTeams(@Arg('email') email: string) {
    const result = await manager.query(
      `select m.id, t.name, u.fullname from members m inner join teams t on m."teamId" = t.id inner join users u on m."userId" = u.id where u."email"=$1`,
      [email]
    );
    return {
      ok: true,
      message: false,
      custom: result,
    };
  }
}
