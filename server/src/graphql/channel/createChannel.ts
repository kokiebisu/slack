import { Resolver, Mutation, Arg, UseMiddleware } from 'type-graphql';
import { Channel } from '../../models/Channel';
import { Team } from '../../models/Team';
import { ChannelResponse } from '../response/channelResponse';
import { isAuth } from '../../middleware/isAuthenticated';

@Resolver()
export class CreateChannelResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => ChannelResponse)
  async createChannel(
    @Arg('name') name: string,
    @Arg('teamId') teamId: string
  ): Promise<ChannelResponse | Error> {
    try {
      const team = await Team.findOne(teamId);
      if (!team) {
        return {
          ok: false,
          message: 'no team was found',
          channel: null,
        };
      }
      const channel = await Channel.create({ name, teamId }).save();
      return {
        ok: true,
        channel,
      };
    } catch (err) {
      throw new Error('error occured when creating channel');
    }
  }
}
