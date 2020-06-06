import { Mutation, Arg, Ctx } from 'type-graphql';
import { redis } from '../../redis';
import { User } from '../../models/User';
import { getDigitToken } from '../../util/tokenGenerator';
import { Context } from '../../interface/Context';
import { AuthorizationResponse } from '../response/authResponse';

export class VerifyResolver {
  @Mutation(() => AuthorizationResponse)
  async verifyUser(
    @Arg('digit') digit: number,
    @Ctx() context: Context
  ): Promise<AuthorizationResponse> {
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

    try {
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
      return {
        ok: false,
        message: 'error occured while updating user confirmed',
      };
    }
  }
}
