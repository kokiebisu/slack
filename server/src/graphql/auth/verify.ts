import { Mutation, Arg, Ctx, Query } from 'type-graphql';
import { redis } from '../../redis';
import { getDigitToken } from '../../util/tokenGenerator';
import { Context } from '../../interface/Context';
import {
  InviteResponse,
  AuthorizationResponse,
} from '../response/authResponse';
import { getManager } from 'typeorm';

import { User } from '../../models/User';

import jwt from 'jsonwebtoken';

const manager = getManager();

export class VerifyResolver {
  @Mutation(() => AuthorizationResponse)
  async verifyUserByDigit(
    @Arg('digit') digit: number,
    @Ctx() context: Context
  ): Promise<AuthorizationResponse | Error> {
    try {
      const token = await redis.get(`${digit}`);

      if (!token) {
        return {
          ok: false,
          errorlog: 'digit is invalid',
        };
      }

      const decoded: any = getDigitToken(token, digit);

      await redis.del(`${digit}`);

      if (!decoded.userId) {
        return {
          ok: false,
          errorlog: 'user not found',
        };
      }

      const user = await manager.query('select * from users where id=$1', [
        decoded.userId,
      ]);

      await manager.query('update users set confirmed = true where id=$1', [
        user[0].id,
      ]);

      if (user.length === 0) {
        return {
          ok: false,
          errorlog: 'unable to find user',
        };
      }

      context.req.session!.userId = decoded.userId;

      return {
        ok: true,
        errorlog: 'successful',
      };
    } catch (err) {
      throw new Error('error occured while confirming user');
    }
  }

  @Query(() => AuthorizationResponse)
  async verifyUserByToken(
    @Arg('token') token: string,
    @Ctx() context: Context
  ): Promise<AuthorizationResponse | Error> {
    try {
      const userId = await redis.get(`${token}`);
      if (!userId) {
        return {
          ok: false,
          errorlog: 'not a valid token',
        };
      }

      context.req.session!.userId = userId;

      return {
        ok: true,
        errorlog: '',
      };
    } catch (err) {
      throw new Error('error occured while verifying user by token');
    }
  }

  @Query(() => InviteResponse)
  async verifyUserInvite(
    @Arg('token') token: string,
    @Arg('invitorId') invitorId: string,
    @Ctx() { req }: Context
  ): Promise<InviteResponse | Error> {
    try {
      // userid is the invitor
      // const userId = await redis.get(`${token}`);
      const decoded: any = jwt.verify(token, invitorId);

      if (!decoded) {
        return {
          ok: false,
          errorlog: 'not a valid token',
          teamId: '',
        };
      }

      if (decoded.email && decoded.teamId && decoded.name) {
        const { email, teamId } = decoded;
        const user = await manager.findOne(User, {
          email: email,
        });

        if (!user) {
          return {
            ok: false,
            errorlog: 'not a valid token',
            teamId: '',
          };
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

        return {
          ok: true,
          teamId,
        };
      }
      return {
        ok: false,
        errorlog: 'not decoded successfully',
        teamId: '',
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => InviteResponse)
  async createUserInvite(
    @Arg('token') token: string,
    @Arg('invitorId') invitorId: string,
    @Arg('name') name: string,
    @Arg('password') password: string,
    @Arg('avatarBackground') avatarBackground: string,
    @Ctx() { req }: Context
  ): Promise<InviteResponse | Error> {
    try {
      const decoded: any = jwt.verify(token, invitorId);

      if (!decoded) {
        return {
          ok: false,
          errorlog: 'not a valid token',
          teamId: '',
        };
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

      return {
        ok: true,
        teamId,
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
