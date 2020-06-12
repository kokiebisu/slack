import { ObjectType, Field } from 'type-graphql';
import { Channel } from '../../models/Channel';
import { BaseResponse } from './baseResponse';
import { Member } from '../../models/Member';

@ObjectType()
export class MembersResponse extends BaseResponse {
  @Field(() => [Member], { nullable: true })
  members: Member[] | null;
}
