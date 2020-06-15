import { Mutation, Ctx } from 'type-graphql';
import { Context } from '../../interface/Context';
import { AuthorizationResponse } from '../response/authResponse';

export class LogoutResolver {
  @Mutation(() => AuthorizationResponse)
  logout(@Ctx() context: Context): Promise<AuthorizationResponse> {
    return new Promise((res, rej) => {
      context.req.session?.destroy((err) => {
        if (err) {
          return rej({
            ok: false,
            errorlog: 'there was an error',
          });
        }

        context.res.clearCookie('qid');

        return res({
          ok: true,
          errorlog: 'successful',
        });
      });
    });
  }
}
