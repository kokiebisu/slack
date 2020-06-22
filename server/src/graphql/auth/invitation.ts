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
    @Ctx() { req }: Context
  ): Promise<BaseResponse | Error> {
    try {
      console.log('email', email);
      console.log('name', name);
      console.log('userid', req.session?.userId);

      const user = await manager.findOne(User, {
        id: req.session?.userId,
      });

      console.log('entered');

      if (!user) {
        return {
          ok: false,
          errorlog: "wasn't able to find user",
        };
      }

      console.log('entered1', user);

      const token = createStringToken(user);
      redis.set(`${token}`, user.id);
      console.log('entered2', token);
      await sendInvitationEmail(email, name, user.fullname);
      console.log('entered3');
      return {
        ok: true,
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
