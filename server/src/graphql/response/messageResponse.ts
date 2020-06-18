import { ObjectType, Field } from 'type-graphql';
import { BaseResponse } from './baseResponse';
import { Message } from '../../models/Message';

@ObjectType()
export class DisplayingMessages {
  @Field(() => [DisplayingMessage])
  messages: DisplayingMessage[];
}

@ObjectType()
export class DisplayingMessage {
  @Field()
  id: number;

  @Field()
  fullname: string;

  @Field()
  body: string;

  @Field()
  avatarBackground: string;
}

export interface DisplayingMessagesPayload {
  messages: DisplayingMessage[];
}

export interface DisplayingMessagePayload {
  id: number;

  fullname: string;

  body: string;

  avatarBackground: string;
}

@ObjectType()
export class MessageResponse extends BaseResponse {
  @Field(() => Message, { nullable: true })
  message: Message | null;
}

@ObjectType()
export class ChannelMessagesResponse extends BaseResponse {
  @Field(() => [DisplayingMessage], { nullable: true })
  messages: DisplayingMessage[] | null;
}
