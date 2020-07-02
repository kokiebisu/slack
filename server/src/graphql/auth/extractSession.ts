import { Mutation, Ctx } from 'type-graphql';

import { Context } from '../../interface/Context';
import { ExtractResponse } from '../response/authResponse';

export class VerifyResolver {
  @Mutation(() => ExtractResponse)
  async extractSession(
    @Ctx() context: Context
  ): Promise<ExtractResponse | Error> {
    try {
      const userId = context.req.session!.userId;

      if (!userId) {
        return {
          ok: false,
          errorlog: 'cannot extract',
          userId: '',
        };
      }

      return {
        ok: true,
        userId,
      };
    } catch (err) {
      throw new Error('error occured while confirming user');
    }
  }
}
