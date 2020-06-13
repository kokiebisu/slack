import { Mutation, Arg, Resolver } from 'type-graphql';
import { Team } from '../../models/Team';
import { BaseResponse } from '../response/baseResponse';
import { Connection } from 'typeorm';
import { Member } from '../../models/Member';
import { MemberResponse } from '../response/memberResponse';

export class MemberResolver {
  @Mutation(() => BaseResponse)
  async addMember(
    @Arg('teamId') teamId: string,
    @Arg('userId') userId: number
  ): Promise<MemberResponse | Error> {
    const member = await Member.create({ teamId, userId }).save();

    return {
      ok: true,
      message: '',
      member,
    };
  }
}
