import { Resolver, Query, Ctx } from 'type-graphql';
import { Team } from '../../models/Team';
import { TeamsResponse } from '../response/teamResponse';

@Resolver()
export class TeamsResolver {
  @Query(() => TeamsResponse)
  async teams(): Promise<TeamsResponse | Error> {
    try {
      const teams = await Team.find();
      return {
        ok: true,
        teams,
      };
    } catch (err) {
      throw new Error('error when finding teams');
    }
  }
}
