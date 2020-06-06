import { ObjectType, Field } from 'type-graphql';
import { Team } from '../../models/Team';
import { BaseResponse } from './baseResponse';

@ObjectType()
export class TeamResponse extends BaseResponse {
  @Field(() => Team, { nullable: true })
  team: Team | null;
}

@ObjectType()
export class TeamsResponse extends BaseResponse {
  @Field(() => [Team], { nullable: true })
  teams: Team[] | null;
}
