import { Query, Arg } from 'type-graphql';
import { MembersResponse } from '../response/memberResponse';
import { Member } from '../../models/Member';

export class MembersResolver {
  @Query(() => MembersResponse)
  async getMembersByTeam(@Arg('teamId') teamId: string) {
    try {
      const members = await Member.find({ where: { teamId } });
      return {
        ok: true,
        message: '',
        members,
      };
    } catch (err) {
      throw new Error('something went wrong while fetching members');
    }
  }

  @Query(() => MembersResponse)
  async getMembersByUser(@Arg('userId') userId: number) {
    try {
      const members = await Member.find({ where: { userId } });
      return {
        ok: true,
        message: '',
        members,
      };
    } catch (err) {
      throw new Error('something went wrong while fetching members');
    }
  }
}
