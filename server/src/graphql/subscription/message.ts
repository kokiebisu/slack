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
  DisplayingMessageResponse,
  DisplayingMessagePayload,
  DisplayingMessage,
} from '../response/messageResponse';
import { Context } from '../../interface/Context';
import { isAuth } from '../../middleware/isAuthenticated';
import { User } from '../../models/User';

const manager = getManager();
const CHANNEL_MESSAGE = 'channel message';

@Resolver()
export class MessageResolver {
  @Subscription(() => DisplayingMessage, {
    topics: CHANNEL_MESSAGE,
    filter: ({ payload, args }) => payload.channelId === args.id,
  })
  subscribeToMessages(
    @Arg('id') id: string,
    @Root()
    { channelId, fullname, body, avatarBackground }: DisplayingMessagePayload
  ): DisplayingMessagePayload {
    return {
      channelId,
      fullname,
      body,
      avatarBackground,
    };
  }

  // @UseMiddleware(isAuth)
  @Mutation(() => DisplayingMessageResponse)
  async sendMessage(
    @Arg('channelId') channelId: string,
    @Arg('teamId') teamId: string,
    @Arg('body') body: string,
    @PubSub() pubSub: PubSubEngine,
    @Ctx() { req }: Context
  ): Promise<DisplayingMessageResponse | Error> {
    try {
      // const userId = req.session!.userId;
      const userId = 14;

      const member = await manager.query(
        'select id from members where "userId"=$1 and "teamId"=$2',
        [userId, teamId]
      );

      const memberId = member[0].id;

      await manager
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
        return {
          ok: false,
          errorlog: 'cannot find user from given userid',
          displayingMessage: null,
        };
      }

      const payload = {
        // this must be channelid
        channelId,
        fullname: user?.fullname!,
        body,
        avatarBackground: user?.avatarBackground,
      };

      await pubSub.publish(CHANNEL_MESSAGE, payload);

      return {
        ok: true,
        displayingMessage: payload,
      };
    } catch (err) {
      throw new Error('something went wrong when sending message');
    }
  }
}
