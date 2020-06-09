import { Mutation, Arg, Ctx, Query } from 'type-graphql';
import { redis } from '../../redis';
import { User } from '../../models/User';
import { getDigitToken } from '../../util/tokenGenerator';
import { Context } from '../../interface/Context';
import { AuthorizationResponse } from '../response/authResponse';

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
          message: 'digit is invalid',
        };
      }

      const decoded: any = getDigitToken(token, digit);

      await redis.del(`${digit}`);

      if (!decoded) {
        return {
          ok: false,
          message: 'user not found',
        };
      }
      const user = await User.findOne(decoded.userId);
      User.update({ id: decoded.userId }, { confirmed: true });

      if (!user) {
        return {
          ok: false,
          message: 'unable to find user',
        };
      }

      context.req.session!.userId = decoded.userId;

      return {
        ok: true,
        message: 'successful',
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
          message: 'not a valid token',
        };
      }

      context.req.session!.userId = userId;

      return {
        ok: true,
        message: '',
      };
    } catch (err) {
      throw new Error('error occured while verifying user by token');
    }
  }
}
