import { ObjectType, Field } from 'type-graphql';
import { BaseResponse } from './baseResponse';

@ObjectType()
class BelongingUsers {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field()
  channelId: string;
}

@ObjectType()
export class BelongingUsersResponse extends BaseResponse {
  @Field(() => [BelongingUsers], { nullable: true })
  belongingUsers: BelongingUsers | null;
}
