import { ObjectType, Field } from 'type-graphql';
import { Channel } from '../../models/Channel';
import { BaseResponse } from './baseResponse';

@ObjectType()
export class ChannelWithFullName extends Channel {
  @Field()
  fullname: string;
}

@ObjectType()
export class ChannelWithFullNameResponse extends BaseResponse {
  @Field(() => ChannelWithFullName, { nullable: true })
  channel: ChannelWithFullName | null;
}

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
