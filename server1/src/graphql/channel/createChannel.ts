import { Resolver, Mutation, Arg, UseMiddleware, Ctx } from "type-graphql";
import { Channel } from "../../models/Channel";
import { Team } from "../../models/Team";
import { ChannelResponse } from "../response/channelResponse";
import { isAuth } from "../../middleware/isAuthenticated";
import { getManager } from "typeorm";
import { Context } from "../../interface/Context";

const manager = getManager();

declare module "express-session" {
  interface Session {
    userId: string;
  }
}

@Resolver()
export class CreateChannelResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => ChannelResponse)
  async createChannel(
    @Ctx() context: Context,
    @Arg("name") name: string,
    @Arg("teamId") teamId: string,
    @Arg("isPublic") isPublic: boolean,
    @Arg("topic", { nullable: true }) topic?: string,
    @Arg("description", { nullable: true }) description?: string
  ): Promise<ChannelResponse | Error> {
    try {
      const userId = context.req.session!.userId;
      if (!userId) {
        return {
          ok: false,
          errorlog: "was not able to extract userid",
          channel: null,
        };
      }
      const team = await Team.findOne(teamId);

      if (!team) {
        return {
          ok: false,
          errorlog: "no team was found",
          channel: null,
        };
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

      return {
        ok: true,
        channel,
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
