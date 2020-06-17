import { ObjectType, Field } from 'type-graphql';
import { BaseResponse } from './baseResponse';
import { Message } from '../../models/Message';

@ObjectType()
class DisplayingMessages {
  @Field()
  id: number;

  @Field()
  fullname: string;

  @Field()
  body: string;
}

@ObjectType()
export class MessageResponse extends BaseResponse {
  @Field(() => Message, { nullable: true })
  message: Message | null;
}

@ObjectType()
export class ChannelMessagesResponse extends BaseResponse {
  @Field(() => [DisplayingMessages], { nullable: true })
  messages: DisplayingMessages[] | null;
}
