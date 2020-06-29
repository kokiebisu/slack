import { Arg, Resolver, Mutation, Ctx, UseMiddleware } from 'type-graphql';
import { Context } from '../../interface/context';
import { Team } from '../../models/Team';
import { TeamResponse } from '../response/teamResponse';
import { isAuth } from '../../middleware/isAuthenticated';
import { getManager } from 'typeorm';
// import { Member } from '../../models/UserTeam';

const manager = getManager();

@Resolver()
export class CreateTeamResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => TeamResponse)
  async createTeam(
    @Arg('name') name: string,
    @Arg('avatarBackground') avatarBackground: string,
    @Ctx() { req }: Context
  ): Promise<TeamResponse | Error> {
    try {
      const userId = req.session!.userId;

      const team = await manager
        .create(Team, {
          name,
          avatarBackground,
          ownerId: userId,
        })
        .save();

      await manager.query(
        'insert into members ("teamId", "userId") values ($1, $2)',
        [team.id, userId]
      );

      return {
        ok: true,
        team,
      };
    } catch (err) {
      throw new Error('error occured when creating the team');
    }
  }
}
