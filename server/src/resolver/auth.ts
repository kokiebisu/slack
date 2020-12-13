import { Query, Mutation, Ctx, Arg } from "type-graphql";
import { Context } from "../types";
import { sendInvitationEmail } from "../util/send";
import { getManager } from "typeorm";

import jwt from "jsonwebtoken";

// Models
import { User } from "../entity/user";
import {
  createDigitToken,
  createStringToken,
  getDigitToken,
} from "../util/token";
import { sendDigitEmail, sendLinkEmail } from "../util/send";
import { redis } from "../redis";

declare module "express-session" {
  interface Session {
    userId: string;
  }
}

export class AuthResolver {
  @Mutation(() => Boolean)
  async sendInvitation(
    @Arg("email") email: string,
    @Arg("name", { nullable: true }) name: string,
    @Arg("teamId") teamId: string,
    @Ctx() { req }: Context
  ): Promise<Boolean | Error> {
    const manager = getManager();
    try {
      const user = await manager.findOne(User, {
        id: req.session?.userId,
      });

      if (!user) {
        return false;
      }

      const token = jwt.sign({ email, name, teamId }, `${user.id}`);

      // const token  = await redis.set(`${token}`, user.id);

      await sendInvitationEmail(email, `${user.id}`, user.fullname, token);

      return true;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => Boolean)
  logout(@Ctx() context: Context): Promise<Boolean> {
    return new Promise((_res, _rej) => {
      context.req.session?.destroy((err) => {
        if (err) {
          return false;
        }

        context.res.clearCookie("qid");

        return true;
      });
    });
  }

  @Mutation(() => Boolean)
  async register(
    @Arg("email") email: string,
    @Arg("fullname") fullname: string,
    @Arg("password") password: string,
    @Arg("avatarBackground") avatarBackground: string
  ) {
    try {
      const user = await User.create({
        fullname,
        email,
        password,
        avatarBackground,
      }).save();

      // const digit = Math.floor(100000 + Math.random() * 900000);
      const digit = 111111;

      const token = createDigitToken(digit, user);

      await sendDigitEmail(email, digit);

      redis.set(`${digit}`, token);

      return true;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Query(() => Boolean)
  async checkEmail(@Arg("email") email: string): Promise<Boolean | Error> {
    const manager = getManager();
    try {
      const user = await manager.findOne(User, {
        email,
      });

      if (!user) {
        return false;
      }

      const token = createStringToken(user);
      redis.set(`${token}`, user.id);

      await sendLinkEmail(email, token);

      return true;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => String)
  async extractSession(
    @Ctx() context: Context
  ): Promise<String | Error | null> {
    try {
      const userId = context.req.session!.userId;

      if (!userId) {
        return null;
      }

      return userId;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => Boolean)
  async verifyUserByDigit(
    @Arg("digit") digit: number,
    @Ctx() context: Context
  ): Promise<Boolean | Error> {
    const manager = getManager();
    try {
      const token = await redis.get(`${digit}`);
      if (!token) {
        return false;
      }

      const decoded: any = getDigitToken(token, digit);

      await redis.del(`${digit}`);
      if (!decoded.userId) {
        return false;
      }

      const user = await manager.query("select * from users where id=$1", [
        decoded.userId,
      ]);

      await manager.query("update users set confirmed = true where id=$1", [
        user[0].id,
      ]);

      if (user.length === 0) {
        return false;
      }

      context.req.session!.userId = decoded.userId;

      return true;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Query(() => Boolean)
  async verifyUserByToken(
    @Arg("token") token: string,
    @Ctx() context: Context
  ): Promise<Boolean | Error> {
    try {
      const userId = await redis.get(`${token}`);
      if (!userId) {
        return false;
      }

      context.req.session!.userId = userId;

      return true;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Query(() => Boolean)
  async verifyUserInvite(
    @Arg("token") token: string,
    @Arg("invitorId") invitorId: string,
    @Ctx() { req }: Context
  ): Promise<Boolean | Error> {
    const manager = getManager();
    try {
      // userid is the invitor
      // const userId = await redis.get(`${token}`);
      const decoded: any = jwt.verify(token, invitorId);

      if (!decoded) {
        return false;
      }

      if (decoded.email && decoded.teamId && decoded.name) {
        const { email, teamId } = decoded;
        const user = await manager.findOne(User, {
          email: email,
        });

        if (!user) {
          return false;
        }

        req.session!.userId = user.id;

        // add user into team
        await manager.query(
          `insert into members ("teamId", "userId") values ($1, $2)`,
          [teamId, user.id]
        );

        // fetch all channels that is public
        const channels = await manager.query(
          `select * from channels where "teamId"=$1 and "isPublic"=true`,
          [teamId]
        );

        channels.forEach(async (channel: any) => {
          await manager.query(
            `insert into channel_members ("userId", "channelId") values ($1, $2)`,
            [user.id, channel.id]
          );
        });

        return true;
      }
      return false;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => String)
  async createUserInvite(
    @Arg("token") token: string,
    @Arg("invitorId") invitorId: string,
    @Arg("name") name: string,
    @Arg("password") password: string,
    @Arg("avatarBackground") avatarBackground: string,
    @Ctx() { req }: Context
  ): Promise<String | Error | null> {
    const manager = getManager();
    try {
      const decoded: any = jwt.verify(token, invitorId);

      if (!decoded) {
        return null;
      }

      const { email, teamId } = decoded;
      // create a user

      const user = await manager
        .create(User, {
          fullname: name,
          email,
          password,
          confirmed: true,
          avatarBackground,
        })
        .save();

      req.session!.userId = user.id;

      // add user into team
      await manager.query(
        `insert into members ("teamId", "userId") values ($1, $2)`,
        [teamId, user.id]
      );

      // fetch all channels that is public
      const channels = await manager.query(
        `select * from channels where "teamId"=$1 and "isPublic"=true`,
        [teamId]
      );

      channels.forEach(async (channel: any) => {
        await manager.query(
          `insert into channel_members ("userId", "channelId") values ($1, $2)`,
          [user.id, channel.id]
        );
      });

      return teamId;
    } catch (err) {
      throw new Error(err);
    }
  }
}
