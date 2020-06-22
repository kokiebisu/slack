import { Mutation, Ctx, Arg } from 'type-graphql';
import { Context } from '../../interface/Context';
import { AuthorizationResponse } from '../response/authResponse';
import { BaseResponse } from '../response/baseResponse';
import { sendInvitationEmail } from 'src/util/sendEmail';
import { getManager } from 'typeorm';

// Models
import { User } from '../../models/User';

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

      if (!user) {
        return {
          ok: false,
          errorlog: "wasn't able to find user",
        };
      }

      await sendInvitationEmail(email, name, user.id);

      return {
        ok: true,
      };
    } catch (err) {
      throw new Error('something went wrong when sending invitation');
    }
  }
}
