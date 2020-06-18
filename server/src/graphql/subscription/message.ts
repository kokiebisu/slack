import {
  Mutation,
  Resolver,
  Arg,
  Ctx,
  UseMiddleware,
  Subscription,
  Root,
  PubSub,
  PubSubEngine,
} from 'type-graphql';
import { getManager } from 'typeorm';
import { Message } from '../../models/Message';
import {
  MessageResponse,
  DisplayingMessages,
  DisplayingMessagesPayload,
} from '../response/messageResponse';
import { Context } from '../../interface/Context';
import { isAuth } from '../../middleware/isAuthenticated';

const manager = getManager();
const CHANNEL_MESSAGE = 'channel message';

@Resolver()
export class MessageResolver {
  @Subscription(() => DisplayingMessages, { topics: CHANNEL_MESSAGE })
  subscribeToMessages(
    @Root() { messages }: DisplayingMessagesPayload
  ): DisplayingMessagesPayload {
    return {
      messages,
    };
  }

  @UseMiddleware(isAuth)
  @Mutation(() => MessageResponse)
  async sendMessage(
    @Arg('channelId') channelId: string,
    @Arg('teamId') teamId: string,
    @Arg('body') body: string,
    @PubSub() pubSub: PubSubEngine,
    @Ctx() { req }: Context
  ) {
    const userId = req.session!.userId;

    // must get member id by retrieving teamid
    const member = await manager.query(
      'select id from members where "userId"=$1 and "teamId"=$2',
      [userId, teamId]
    );

    console.log('mem', member);

    const memberId = member[0].id;

    const message = await manager
      .create(Message, {
        channelId,
        memberId,
        body,
      })
      .save();

    const messages = await manager.query(
      'select mes.id, u.fullname, u."avatarBackground", mes.body from messages mes inner join members mem on mes."memberId"=mem.id inner join users u on mem."userId"=u.id where "channelId"=$1',
      [channelId]
    );

    console.log('messages dsfas', messages);

    const payload: DisplayingMessagesPayload = {
      messages,
    };
    await pubSub.publish(CHANNEL_MESSAGE, payload);

    return {
      ok: true,
      message,
    };
  }
}
