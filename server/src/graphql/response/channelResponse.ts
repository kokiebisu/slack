import { ObjectType, Field } from 'type-graphql';
import { Channel } from '../../models/Channel';
import { BaseResponse } from './baseResponse';

@ObjectType()
export class ChannelResponse extends BaseResponse {
  @Field(() => Channel, { nullable: true })
  channel: Channel | null;
}

@ObjectType()
export class ChannelsResponse extends BaseResponse {
  @Field(() => [Channel], { nullable: true })
  channels: Channel[] | null;
}
