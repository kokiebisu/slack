import { Resolver, Mutation, Query, Arg } from 'type-graphql';
import { MembersResponse } from '../response/memberResponse';
import { response } from 'express';
import { Member } from 'src/models/Member';

@Resolver()
export class MembersResolver {
  @Query(() => MembersResponse)
  async members(@Arg('teamId') teamId: string) {
    try {
      const members = await Member.find({ where: { teamId } });
    } catch (err) {
      throw new Error('something went wrong while fetching members');
    }
  }
}
