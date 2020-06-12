import { Arg, Resolver, Mutation, Ctx, UseMiddleware } from 'type-graphql';
import { Context } from '../../interface/context';
import { Team } from '../../models/Team';
import { TeamResponse } from '../response/teamResponse';
import { isAuth } from '../../middleware/isAuthenticated';
import { Member } from '../../models/Member';

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

      const team = await Team.create({
        name,
        avatarBackground,
        ownerId: userId,
      }).save();

      const member = await Member.create({ teamId: team.id, userId }).save();

      return {
        ok: true,
        team,
      };
    } catch (err) {
      throw new Error('error occured when creating the team');
    }
  }
}
