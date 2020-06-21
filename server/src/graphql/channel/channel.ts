import { Resolver, Query, Arg, UseMiddleware } from 'type-graphql';
import { ChannelWithFullNameResponse } from '../response/channelResponse';
import { isAuth } from '../../middleware/isAuthenticated';
import { getManager } from 'typeorm';

const manager = getManager();

const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

@Resolver()
export class ChannelResolver {
  @UseMiddleware(isAuth)
  @Query(() => ChannelWithFullNameResponse)
  async getChannelById(@Arg('channelId') channelId: string) {
    console.log('channel', channelId);
    try {
      const channelArray = await manager.query(
        'select c.id, c.name, c."isPublic", c."teamId", c.description, c."createdAt", c.topic, u.fullname from channels c inner join users u on c."creatorId" = u.id where c.id=$1',
        [channelId]
      );

      const channel = channelArray[0];

      if (!channel) {
        return {
          ok: false,
          errorlog: 'no channels found',
          channel: null,
        };
      }

      const date = new Date(channel['createdAt']).toLocaleString(
        'en-US',
        options
      );

      channel['createdAt'] = date;

      return {
        ok: true,
        channel,
      };
    } catch (err) {
      throw new Error('error occured when finding channels');
    }
  }
}
