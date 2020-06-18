import {
  Mutation,
  Resolver,
  Arg,
  Ctx,
  UseMiddleware,
  Query,
  ObjectType,
  Field,
  Subscription,
  Root,
  PubSub,
  PubSubEngine,
} from 'type-graphql';
import { getManager } from 'typeorm';
import { Message } from '../../models/Message';
import { MessageResponse } from '../response/messageResponse';
import { Context } from '../../interface/Context';
import { isAuth } from '../../middleware/isAuthenticated';

const manager = getManager();
const CHANNEL_MESSAGE = 'channel message';

@ObjectType()
class Messages {
  @Field(() => [Message])
  messages: Message[];
}

interface MessagesPayload {
  messages: Message[];
}

@Resolver()
export class MessageResolver {
  @Subscription(() => Messages, { topics: CHANNEL_MESSAGE })
  fetchMessages(@Root() { messages }: MessagesPayload): Messages {
    try {
      return {
        messages,
      };
    } catch (err) {
      throw new Error(err);
    }
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
    // const userId = 7;
    const userId = req.session!.userId;

    // must get member id by retrieving teamid
    const member = await manager.query(
      'select id from members where "userId"=$1 and "teamId"=$2',
      [userId, teamId]
    );

    console.log('m', member);

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

    const payload: MessagesPayload = { messages };
    await pubSub.publish(CHANNEL_MESSAGE, payload);

    return {
      ok: true,
      message,
    };
  }
}
