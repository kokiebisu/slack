import {
  Ctx,
  Mutation,
  Resolver,
  Query,
  Arg,
  UseMiddleware,
} from "type-graphql";
import { isAuth } from "../middleware/isAuth";
import { getManager } from "typeorm";
import { ChannelWithFullName } from "../object/channel";
import { Channel } from "../entity/channel";
import { Context } from "../types";
import { Team } from "../entity/team";

const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

@Resolver()
export class ChannelResolver {
  @UseMiddleware(isAuth)
  @Query(() => ChannelWithFullName)
  async getChannelById(@Arg("channelId") channelId: string) {
    const manager = getManager();
    try {
      const channelArray = await manager.query(
        'select c.id, c.name, c."isPublic", c."teamId", c.description, c."createdAt", c.topic, u.fullname from channels c inner join users u on c."creatorId" = u.id where c.id=$1',
        [channelId]
      );

      const channel = channelArray[0];

      if (!channel) {
        return null;
      }

      const date = new Date(channel["createdAt"]).toLocaleString(
        "en-US",
        options
      );

      channel["createdAt"] = date;

      return channel;
    } catch (err) {
      throw new Error(err);
    }
  }

  @UseMiddleware(isAuth)
  @Query(() => [Channel])
  async channels(@Arg("teamId") teamId: string): Promise<Channel[] | Error> {
    try {
      const channels = await Channel.find({ where: { teamId } });
      return channels;
    } catch (err) {
      throw new Error(err);
    }
  }

  @UseMiddleware(isAuth)
  @Mutation(() => Channel)
  async createChannel(
    @Ctx() context: Context,
    @Arg("name") name: string,
    @Arg("teamId") teamId: string,
    @Arg("isPublic") isPublic: boolean,
    @Arg("topic", { nullable: true }) topic?: string,
    @Arg("description", { nullable: true }) description?: string
  ): Promise<Channel | Error | null> {
    const manager = getManager();
    try {
      const userId = context.req.session!.userId;
      if (!userId) {
        return null;
      }
      const team = await Team.findOne(teamId);

      if (!team) {
        return null;
      }

      const channel = await Channel.create({
        name,
        teamId,
        topic,
        description,
        isPublic,
        creator: userId,
      }).save();

      await manager.query(
        'insert into channel_members ("userId", "channelId") values ($1, $2)',
        [userId, channel.id]
      );

      return channel;
    } catch (err) {
      throw new Error(err);
    }
  }
}
