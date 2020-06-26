import {
  Resolver,
  Subscription,
  Root,
  Arg,
  PubSub,
  PubSubEngine,
  Ctx,
  Mutation,
  Query,
} from 'type-graphql';
import { getManager } from 'typeorm';
import { DisplayingMessage } from '../response/subscriptionResponse';
import { Context } from '../../interface/Context';
import { DirectMessage } from '../../models/DirectMessage';

const manager = getManager();
const DIRECT_MESSAGE = 'direct message';

const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

@Resolver()
export class DirectMessageResolver {
  @Subscription(() => DisplayingMessage, {
    topics: DIRECT_MESSAGE,
    filter: ({ payload, args }) => payload.userId === args.userID,
  })
  subscribeToDirectMessages(
    @Arg('userID') userID: string,
    @Root()
    { id, fullname, body, avatarBackground, createdAt }: DisplayingMessage
  ): DisplayingMessage {
    // const date = new Date(createdAt).toLocaleDateString('en-US', options);
    return { id, fullname, body, avatarBackground, createdAt };
  }

  @Mutation(() => DisplayingMessage, { nullable: true })
  async sendDirectMessage(
    @Arg('toId') toId: string,
    @Arg('body') body: string,
    @PubSub() pubSub: PubSubEngine,
    @Ctx() { req }: Context
  ): Promise<DisplayingMessage | null> {
    try {
      //   const senderId = req.session!.userId;
      const fromId = 'ac09980c-9077-41d2-b49d-dc5b68a7f40a';

      // get sender fullname
      const result = await manager.query(
        'select * from users where users.id = $1',
        [fromId]
      );

      const fromUser = result[0];

      if (!fromUser) {
        return null;
      }

      const directMessage = await manager
        .create(DirectMessage, {
          fromId: fromUser.id,
          toId: toId,
          body,
        })
        .save();

      const payload = {
        id: directMessage.id,
        fullname: fromUser.fullname,
        body,
        avatarBackground: fromUser.avatarBackground,
        createdAt: directMessage.createdAt,
      };

      await pubSub.publish(DIRECT_MESSAGE, payload);

      return {
        id: directMessage.id,
        fullname: fromUser.fullname,
        body,
        avatarBackground: fromUser?.avatarBackground!,
        createdAt: directMessage.createdAt.toLocaleDateString('en-US', options),
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  @Query(() => [DisplayingMessage])
  async fetchDirectMessages(
    @Arg('senderId') senderId: string,
    @Ctx() { req }: Context
  ): Promise<[DisplayingMessage] | Error | null> {
    try {
      const receiverId = req.session!.userId;
      if (!receiverId) {
        return null;
      }

      const data = await manager.query(
        'select u.fullname as receiver, u."avatarBackground", u2.fullname as sender, dm.body, dm."createdAt" from direct_messages dm inner join users u on dm."toId"=u.id inner join users u2 on dm."fromId"=u2.id where dm."fromId"=$1 and dm."toId"=$2',
        [senderId, receiverId]
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
