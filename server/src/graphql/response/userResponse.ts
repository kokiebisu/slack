import { BaseResponse } from './baseResponse';
import { ObjectType, Field } from 'type-graphql';
import { User } from '../../models/User';

@ObjectType()
export class UserResponse extends BaseResponse {
  @Field(() => User, { nullable: true })
  user: User | null;
}

@ObjectType()
export class UsersResponse extends BaseResponse {
  @Field(() => [User], { nullable: true })
  users: User[] | null;
}
