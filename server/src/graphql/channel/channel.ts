import { Resolver, Query, Arg, UseMiddleware } from 'type-graphql';
import { Channel } from '../../models/Channel';
import { ChannelResponse } from '../response/channelResponse';
import { isAuth } from '../../middleware/isAuthenticated';
import { getManager } from 'typeorm';

const manager = getManager();

@Resolver()
export class ChannelResolver {
  @UseMiddleware(isAuth)
  @Query(() => ChannelResponse)
  async getChannelById(
    @Arg('channelId') channelId: string
  ): Promise<ChannelResponse | Error> {
    try {
      const channel = await manager.findOne(Channel, { id: channelId });

      if (!channel) {
        return {
          ok: false,
          errorlog: 'no channels found',
          channel: null,
        };
      }

      return {
        ok: true,
        channel,
      };
    } catch (err) {
      throw new Error('error occured when finding channels');
    }
  }
}
