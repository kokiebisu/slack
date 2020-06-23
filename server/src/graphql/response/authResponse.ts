import { Field, ObjectType } from 'type-graphql';
import { BaseResponse } from './baseResponse';

@ObjectType()
export class AuthorizationResponse extends BaseResponse {}

@ObjectType()
export class InviteResponse extends BaseResponse {
  @Field({ nullable: true })
  teamId: string;
}
