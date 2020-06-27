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
    filter: ({ payload, args }) => payload.toId === args.fromId,
  })
  subscribeToDirectMessages(
    @Arg('fromId') fromId: string,
    @Root()
    { id, fullname, body, avatarBackground, createdAt }: DisplayingMessage
  ): DisplayingMessage {
    console.log('entered');
    const date = new Date(createdAt).toLocaleDateString('en-US', options);
    return { id, fullname, body, avatarBackground, createdAt: date };
  }

  @Mutation(() => DisplayingMessage, { nullable: true })
  async sendDirectMessage(
    @Arg('toId') toId: string,
    @Arg('body') body: string,
    @PubSub() pubSub: PubSubEngine,
    @Ctx() { req }: Context
  ): Promise<DisplayingMessage | null> {
    try {
      const fromId = req.session!.userId;
      // const fromId = 'ac09980c-9077-41d2-b49d-dc5b68a7f40a';

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
        toId,
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
    @Arg('fromId') fromId: string,
    @Ctx() { req }: Context
  ): Promise<[DisplayingMessage] | Error | null> {
    try {
      const toId = req.session!.userId;

      // const toId = '3b3f957a-e30c-4687-9036-d433ec4eed39';
      if (!toId) {
        return null;
      }

      const data = await manager.query(
        'select dm.id, u."avatarBackground", u2.fullname as fullname, dm.body, dm."createdAt" from direct_messages dm inner join users u on dm."toId"=u.id inner join users u2 on dm."fromId"=u2.id where dm."fromId"=$1 and dm."toId"=$2',
        [toId, fromId]
      );

      let date;

      data.forEach((message: DisplayingMessage) => {
        date = new Date(message['createdAt']).toLocaleString('en-US', options);
        message['createdAt'] = date;
      });

      console.log('what', data);

      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
}
