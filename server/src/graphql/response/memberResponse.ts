import { ObjectType, Field } from 'type-graphql';
import { BaseResponse } from './baseResponse';
import { Member } from '../../models/Member';

@ObjectType()
export class MemberResponse extends BaseResponse {
  @Field(() => Member, { nullable: true })
  member: Member | null;
}

@ObjectType()
export class MembersResponse extends BaseResponse {
  @Field(() => [Member], { nullable: true })
  members: Member[] | null;
}
