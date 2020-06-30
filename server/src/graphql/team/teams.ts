import { Resolver, Query } from 'type-graphql';
import { Team } from '../../models/Team';
import { TeamsResponse } from '../response/teamResponse';

@Resolver()
export class TeamsResolver {
  @Query(() => TeamsResponse)
  async teams(): Promise<TeamsResponse | Error> {
    try {
      const teams = await Team.find({ relations: ['members'] });
      return {
        ok: true,
        teams,
      };
    } catch (err) {
      throw new Error('error when finding teams');
    }
  }
}
