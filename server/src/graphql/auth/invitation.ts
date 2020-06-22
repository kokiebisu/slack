import { Mutation, Ctx, Arg } from 'type-graphql';
import { Context } from '../../interface/Context';
import { AuthorizationResponse } from '../response/authResponse';
import { BaseResponse } from '../response/baseResponse';
import { sendInvitationEmail } from '../../util/sendEmail';
import { getManager } from 'typeorm';

// Util
import { createStringToken } from '../../util/tokenGenerator';

// Models
import { User } from '../../models/User';
import { redis } from '../../redis';

const manager = getManager();

export class InvitationResolver {
  @Mutation(() => BaseResponse)
  async sendInvitation(
    @Arg('email') email: string,
    @Arg('name', { nullable: true }) name: string,
    @Arg('teamId') teamId: string,
    @Ctx() { req }: Context
  ): Promise<BaseResponse | Error> {
    try {
      const user = await manager.findOne(User, {
        id: req.session?.userId,
      });

      if (!user) {
        return {
          ok: false,
          errorlog: "wasn't able to find user",
        };
      }

      const token = createStringToken(user);
      await redis.set(`${token}`, user.id);

      await sendInvitationEmail(email, name, user.fullname, token, teamId);

      return {
        ok: true,
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
