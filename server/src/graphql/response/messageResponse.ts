import { ObjectType, Field } from 'type-graphql';
import { BaseResponse } from './baseResponse';
import { Message } from '../../models/Message';

@ObjectType()
export class MessageResponse extends BaseResponse {
  @Field(() => Message, { nullable: true })
  message: Message | null;
}
