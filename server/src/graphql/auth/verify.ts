import { Mutation, Arg, Ctx, Query } from 'type-graphql';
import { redis } from '../../redis';
import { getDigitToken } from '../../util/tokenGenerator';
import { Context } from '../../interface/Context';
import { AuthorizationResponse } from '../response/authResponse';
import { getManager } from 'typeorm';

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
      console.log('ver userId', userId);
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
}
