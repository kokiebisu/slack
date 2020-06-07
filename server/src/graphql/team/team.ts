import { Resolver, Query, Arg } from 'type-graphql';
import { Team } from '../../models/Team';
import { TeamResponse } from '../response/teamResponse';

@Resolver()
export class TeamResolver {
  @Query(() => TeamResponse)
  async team(@Arg('teamId') teamId: string): Promise<TeamResponse | Error> {
    try {
      const team = await Team.findOne(
        { id: teamId },
        { relations: ['channels'] }
      );
      if (!team) {
        return {
          ok: false,
          message: 'no teams found',
          team: null,
        };
      }
      return {
        ok: true,
        team,
      };
    } catch (err) {
      throw new Error('error when finding team');
    }
  }
}
