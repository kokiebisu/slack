import { Resolver, Query, Arg, UseMiddleware } from 'type-graphql';
import { Channel } from '../../models/Channel';
import {
  ChannelResponse,
  ChannelWithFullName,
  ChannelWithFullNameResponse,
} from '../response/channelResponse';
import { isAuth } from '../../middleware/isAuthenticated';
import { getManager } from 'typeorm';

const manager = getManager();

@Resolver()
export class ChannelResolver {
  @UseMiddleware(isAuth)
  @Query(() => ChannelWithFullNameResponse)
  async getChannelById(
    @Arg('channelId') channelId: string
  ): Promise<ChannelWithFullNameResponse | Error> {
    try {
      const channel = await manager.query(
        'select c.id, c.name, c."isPublic", c."teamId", c.description, c.created_on, c.topic, u.fullname from channels c inner join users u on c."creatorId" = u.id where c.id=$1',
        [channelId]
      );

      if (!channel) {
        return {
          ok: false,
          errorlog: 'no channels found',
          channel: null,
        };
      }

      return {
        ok: true,
        channel: channel[0],
      };
    } catch (err) {
      throw new Error('error occured when finding channels');
    }
  }
}
