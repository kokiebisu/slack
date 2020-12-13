import {
  Mutation,
  Resolver,
  Arg,
  Ctx,
  Subscription,
  Root,
  PubSub,
  PubSubEngine,
  Query,
} from "type-graphql";
import { getManager } from "typeorm";
import { Message } from "../entity/message";

import { Context } from "../types";

import { User } from "../entity/user";
import { DisplayingMessage } from "../object/subscription";

const CHANNEL_MESSAGE = "channel message";

const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

@Resolver()
export class MessageResolver {
  @Subscription(() => DisplayingMessage, {
    topics: CHANNEL_MESSAGE,
    filter: ({ payload, args }) => payload.channelId === args.channelID,
  })
  subscribeToMessages(
    @Root()
    { id, fullname, body, avatarBackground, createdAt }: DisplayingMessage,
    @Arg("channelID") _: string
  ): DisplayingMessage {
    const date = new Date(createdAt).toLocaleDateString("en-US", options);
    console.log("entered subscribe to message");
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
    @Arg("channelId") channelId: string,
    @Arg("teamId") teamId: string,
    @Arg("body") body: string,
    @PubSub() pubSub: PubSubEngine,
    @Ctx() { req }: Context
  ): Promise<DisplayingMessage | null> {
    const manager = getManager();
    try {
      console.log("entered send message");
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
        createdAt: message.createdAt.toLocaleDateString("en-US", options),
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  @Query(() => [DisplayingMessage])
  async fetchMessages(
    @Arg("channelId") channelId: string
  ): Promise<[DisplayingMessage] | Error> {
    const manager = getManager();
    try {
      console.log("entered fetch message");
      const data = await manager.query(
        'select mes.id, u.fullname, u."avatarBackground", mes.body, mes."createdAt" from messages mes inner join members mem on mes."memberId"=mem.id inner join users u on mem."userId"=u.id where "channelId"=$1',
        [channelId]
      );

      let date;

      data.forEach((message: DisplayingMessage) => {
        date = new Date(message["createdAt"]).toLocaleString("en-US", options);
        message["createdAt"] = date;
      });

      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
}
