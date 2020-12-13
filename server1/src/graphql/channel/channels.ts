import { Resolver, Query, Arg, UseMiddleware } from 'type-graphql';
import { Channel } from '../../models/Channel';
import { ChannelsResponse } from '../response/channelResponse';
import { isAuth } from '../../middleware/isAuthenticated';

@Resolver()
export class ChannelsResolver {
  @UseMiddleware(isAuth)
  @Query(() => ChannelsResponse)
  async channels(
    @Arg('teamId') teamId: string
  ): Promise<ChannelsResponse | Error> {
    try {
      const channels = await Channel.find({ where: { teamId } });
      return {
        ok: true,
        channels,
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
