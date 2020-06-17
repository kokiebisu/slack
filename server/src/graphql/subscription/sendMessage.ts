import { Mutation, Resolver, Arg, Ctx, UseMiddleware } from 'type-graphql';
import { getManager } from 'typeorm';
import { Message } from '../../models/Message';
import { MessageResponse } from '../response/messageResponse';
import { Context } from '../../interface/Context';
import { isAuth } from '../../middleware/isAuthenticated';

const manager = getManager();

@Resolver()
export class MessageResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => MessageResponse)
  async sendMessage(
    @Arg('channelId') channelId: string,
    @Arg('teamId') teamId: string,
    @Arg('body') body: string,
    @Ctx() { req }: Context
  ) {
    const userId = req.session!.userId;

    // must get member id by retrieving teamid
    const member = await manager.query(
      'select id from members where "userId"=$1 and "teamId"=$2',
      [userId, teamId]
    );

    const memberId = member[0].id;

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
