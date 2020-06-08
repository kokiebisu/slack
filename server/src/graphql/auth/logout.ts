import { Mutation, Ctx } from 'type-graphql';
import { Context } from '../../interface/Context';
import { AuthorizationResponse } from '../response/authResponse';

export class LogoutResolver {
  @Mutation(() => AuthorizationResponse)
  logout(@Ctx() context: Context) {
    context.req.session?.destroy((err) => {
      if (err) {
        return {
          ok: false,
          message: 'an error occured',
        };
      }
      return {
        ok: true,
      };
    });
  }
}
