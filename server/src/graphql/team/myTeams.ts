import { Resolver, Query, Ctx, UseMiddleware } from 'type-graphql';
import { Team } from '../../models/Team';
import { Context } from '../../interface/context';
import { isAuth } from '../../middleware/isAuthenticated';
import { TeamsResponse } from '../response/teamResponse';

@Resolver()
export class MyTeamsResolver {
  @UseMiddleware(isAuth)
  @Query(() => TeamsResponse)
  async myTeams(@Ctx() { req }: Context): Promise<TeamsResponse> {
    try {
      const userId = req.session!.userId;
      const teams = await Team.find({ ownerId: userId });
      return {
        ok: true,
        teams,
      };
    } catch (err) {
      return {
        ok: false,
        message: 'error occured when finding team',
        teams: null,
      };
    }
  }
}
