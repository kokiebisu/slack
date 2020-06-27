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
  Query,
} from 'type-graphql';
import { getManager } from 'typeorm';
import { Message } from '../../models/Message';

import { Context } from '../../interface/Context';
// import { isAuth } from '../../middleware/isAuthenticated';
import { User } from '../../models/User';
import { DisplayingMessage } from '../response/subscriptionResponse';

const manager = getManager();
const CHANNEL_MESSAGE = 'channel message';

const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

@Resolver()
export class MessageResolver {
  @Subscription(() => DisplayingMessage, {
    topics: CHANNEL_MESSAGE,
    filter: ({ payload, args }) => payload.channelId === args.channelID,
  })
  subscribeToMessages(
    @Arg('channelID') channelID: string,
    @Root()
    { id, fullname, body, avatarBackground, createdAt }: DisplayingMessage
  ): DisplayingMessage {
    const date = new Date(createdAt).toLocaleDateString('en-US', options);

    return {
      id,
      fullname,
      body,
      avatarBackground,
      createdAt: date,
    };
  }

  // @UseMiddleware(isAuth)
  @Mutation(() => DisplayingMessage)
  async sendMessage(
    @Arg('channelId') channelId: string,
    @Arg('teamId') teamId: string,
    @Arg('body') body: string,
    @PubSub() pubSub: PubSubEngine,
    @Ctx() { req }: Context
  ): Promise<DisplayingMessage | null> {
    try {
      const userId = req.session!.userId;

      const member = await manager.query(
        'select id from members where "userId"=$1 and "teamId"=$2',
        [userId, teamId]
      );

      const memberId = member[0].id;

      const message = await manager
        .create(Message, {
          channelId,
          memberId,
          body,
        })
        .save();

      const user = await manager.findOne(User, {
        id: userId,
      });

      if (!user) {
        return null;
      }

      const payload = {
        // this must be channelid
        id: message.id,
        channelId,
        fullname: user?.fullname!,
        body,
        avatarBackground: user?.avatarBackground,
        createdAt: message.createdAt,
      };

      await pubSub.publish(CHANNEL_MESSAGE, payload);

      return {
        id: message.id,
        fullname: user?.fullname!,
        body,
        avatarBackground: user?.avatarBackground!,
        createdAt: message.createdAt.toLocaleDateString('en-US', options),
      };
    } catch (err) {
      throw new Error('something went wrong when sending message');
    }
  }

  @Query(() => [DisplayingMessage])
  async fetchMessages(
    @Arg('channelId') channelId: string
  ): Promise<[DisplayingMessage] | Error> {
    try {
      const data = await manager.query(
        'select mes.id, u.fullname, u."avatarBackground", mes.body, mes."createdAt" from messages mes inner join members mem on mes."memberId"=mem.id inner join users u on mem."userId"=u.id where "channelId"=$1',
        [channelId]
      );

      let date;

      data.forEach((message: DisplayingMessage) => {
        date = new Date(message['createdAt']).toLocaleString('en-US', options);
        message['createdAt'] = date;
      });

      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
}
