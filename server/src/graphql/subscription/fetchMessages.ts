import { Resolver, Arg, Query } from 'type-graphql';
import { getManager } from 'typeorm';
import { ChannelMessagesResponse } from '../response/messageResponse';

const manager = getManager();

@Resolver()
export class MessageResolver {
  @Query(() => ChannelMessagesResponse)
  async fetchMessages(@Arg('channelId') channelId: string) {
    try {
      const messages = await manager.query(
        'select mes.id, u.fullname, u."avatarBackground", mes.body from messages mes inner join members mem on mes."memberId"=mem.id inner join users u on mem."userId"=u.id where "channelId"=$1',
        [channelId]
      );
      return {
        ok: true,
        messages,
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
