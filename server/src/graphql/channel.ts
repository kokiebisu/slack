import { Resolver, Query, Arg, Mutation, Int } from 'type-graphql';
import { Channel } from '../models/Channel';
import { Team } from '../models/Team';

@Resolver()
export class ChannelResolver {
  @Query(() => [Channel])
  async channels(@Arg('teamId') teamId: string) {
    return await Channel.find({ where: { teamId } });
  }

  @Mutation(() => Channel)
  async createChannel(
    @Arg('name') name: string,
    @Arg('teamId') teamId: string
  ): Promise<Channel | null> {
    const team = await Team.findOne(teamId);
    if (!team) {
      return null;
    }

    try {
      const channel = await Channel.create({ name, teamId }).save();
      return channel;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
