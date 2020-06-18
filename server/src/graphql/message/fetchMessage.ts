import { Resolver, Query, Arg } from 'type-graphql';
import { getManager } from 'typeorm';
import { ChannelMessagesResponse } from '../response/messageResponse';

const manager = getManager();

interface FetchMessageInterface {
  fullname: string;
  avatarBackground: string;
  body: string;
  channelId?: string;
}

@Resolver()
export class MessageResolver {
  @Query(() => ChannelMessagesResponse)
  async fetchMessages(
    @Arg('channelId') channelId: string
  ): Promise<ChannelMessagesResponse | Error> {
    try {
      const data = await manager.query(
        'select u.fullname, u."avatarBackground", mes.body from messages mes inner join members mem on mes."memberId"=mem.id inner join users u on mem."userId"=u.id where "channelId"=$1',
        [channelId]
      );

      data.forEach((element: FetchMessageInterface) => {
        element.channelId = channelId;
      });

      return {
        ok: true,
        messages: data,
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
