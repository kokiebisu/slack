import { ObjectType, Field } from 'type-graphql';
import { BaseResponse } from './baseResponse';

@ObjectType()
class BelongingTeams {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  avatarBackground: string;
}

@ObjectType()
export class BelongingTeamsResponse extends BaseResponse {
  @Field(() => [BelongingTeams], { nullable: true })
  belongingTeams: BelongingTeams | null;
}
