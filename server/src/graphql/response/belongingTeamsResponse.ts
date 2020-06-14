import { ObjectType, Field } from 'type-graphql';
import { BaseResponse } from './baseResponse';

@ObjectType()
class BelongingTeams {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  fullname: string;
}

@ObjectType()
export class BelongingTeamsResponse extends BaseResponse {
  @Field(() => [BelongingTeams], { nullable: true })
  belongingTeams: BelongingTeams | null;
}
