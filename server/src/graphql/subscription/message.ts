import { Mutation, Resolver, Arg, Ctx, UseMiddleware } from 'type-graphql';
import { getManager } from 'typeorm';
import { Message } from '../../models/Message';
import { MessageResponse } from '../response/messageResponse';
import { Context } from '../../interface/Context';
import { isAuth } from '../../middleware/isAuthenticated';

const manager = getManager();

@Resolver()
export class SubscriptionResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => MessageResponse)
  async sendMessage(
    @Arg('channelId') channelId: string,
    @Arg('body') body: string,
    @Ctx() { req }: Context
  ) {
    const memberId = req.session!.userId;

    const message = await manager
      .create(Message, {
        channelId,
        memberId,
        body,
      })
      .save();

    return {
      ok: true,
      message,
    };
  }
}
