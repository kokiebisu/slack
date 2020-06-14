import { Query, Arg, Ctx } from 'type-graphql';
import { BelongingTeamsResponse } from '../response/belongingTeamsResponse';
import { getManager } from 'typeorm';
import { Context } from '../../interface/Context';

const manager = getManager();

export class BelongingTeamsResolver {
  @Query(() => BelongingTeamsResponse)
  async getBelongingTeams(@Ctx() { req }: Context) {
    const userId = req.session!.userId;
    console.log('entered', userId);

    const belongingTeams = await manager.query(
      `select t.name, t.id, t."avatarBackground" from members m inner join teams t on m."teamId" = t.id inner join users u on m."userId" = u.id where u.id=$1`,
      [userId]
    );

    if (belongingTeams.length === 0) {
      return {
        ok: false,
        message: "you don't seem to belong to any teams!",
      };
    }

    return {
      ok: true,
      message: null,
      belongingTeams,
    };
  }
}
