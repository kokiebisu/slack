import { Resolver, Mutation, Ctx } from 'type-graphql';
import { Context } from '../../types/Context';

@Resolver()
export class LogoutResolver {
  @Mutation(() => Boolean)
  async logout(@Ctx() context: Context): Promise<boolean> {
    return new Promise((res, rej) => {
      context.req.session!.destroy((err) => {
        if (err) {
          console.log(err);
          return rej(false);
        }
      });

      context.res.clearCookie('quid');
      return res(true);
    });
  }
}
