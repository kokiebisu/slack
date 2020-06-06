import { Resolver, Query } from 'type-graphql';
import { Team } from '../../models/Team';
import { TeamsResponse } from '../response/teamResponse';

@Resolver()
export class TeamsResolver {
  @Query(() => TeamsResponse)
  async teams(): Promise<TeamsResponse> {
    try {
      const teams = await Team.find();
      return {
        ok: true,
        teams,
      };
    } catch (err) {
      return {
        ok: false,
        message: 'error when finding teams',
        teams: null,
      };
    }
  }
}
