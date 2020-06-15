import { Mutation, Resolver, Arg, Ctx } from 'type-graphql';
import { getManager } from 'typeorm';
import { Message } from '../../models/Message';
import { MessageResponse } from '../response/messageResponse';
import { Context } from '../../interface/Context';

const manager = getManager();

@Resolver()
export class SubscriptionResolver {
  @Mutation(() => MessageResponse)
  async sendMessage(
    @Arg('channelId') channelId: string,
    @Arg('body') body: string,
    @Ctx() { req }: Context
  ) {
    const memberId = req.session!.userId;

    const message = await manager.create(Message, {
      channelId,
      memberId,
      body,
    });

    return {
      ok: true,
      message,
    };
  }
}
