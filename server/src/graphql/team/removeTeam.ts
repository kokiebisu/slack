import { Mutation, Arg } from 'type-graphql';
import { Member } from '../../models/Member';
import { Team } from '../../models/Team';
import { TeamResponse } from '../response/teamResponse';

export class RemoveTeam {
  @Mutation(() => TeamResponse)
  async removeTeam(@Arg('teamId') teamId: string) {
    await Member.delete({ teamId });
    const team = await Team.delete({ id: teamId });
    return {
      ok: true,
      team,
    };
  }
}
