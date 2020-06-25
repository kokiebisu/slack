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
import { DirectMessage } from 'src/models/DirectMessage';

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
    const date = new Date(createdAt).toLocaleDateString('en-US', options);
    return { id, fullname, body, avatarBackground, createdAt: date };
  }

  @Mutation(() => DisplayingMessage)
  async sendDirectMessage(
    @Arg('userId') userId: string,
    @Arg('teamId') teamId: string,
    @Arg('body') body: string,
    @PubSub() pubSub: PubSubEngine,
    @Ctx() { req }: Context
  ): Promise<DisplayingMessage | null> {
      try {
          const senderId = req.session!.userId;

          // get sender fullname
          const sender = await manager.query('', [senderId])

          if (senderId) {
              return null;
          }

          const directMessage = await manager.create(DirectMessage, {
              fromId: senderId,
              toId: userId,
              body
          }).save();

          const payload = {
            id: directMessage.id,
            fullname: sender.fullname,
            body,
            acatarBackground: senderId.avatarBackground,
            createdAt: directMessage.createdAt

          }
      }
  }

  @Query(() => [DisplayingMessage])
  async fetchMessages(
      @Arg('senderId') senderId: string,
      @Ctx() {req}: Context
  ): Promise<[DisplayingMessage] | Error> {
      try {
          const data = await manager.query()

          let date;

          data.forEach((message: DisplayingMessage) => {
              date = new Date(message['createdAt']).toLocaleString('en-US', options);
              message['createdAt'] = date;
          })

          return data;
      } catch (err) {
          throw new Error(err)
      }
  }
}
