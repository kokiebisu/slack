import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Team } from '../../models/Team';
import { TeamsResponse } from '../response/teamResponse';
import { User } from '../../models/User';

@Resolver()
export class TeamsResolver {
  @Query(() => TeamsResponse)
  async teams(): Promise<TeamsResponse | Error> {
    try {
      const teams = await Team.find();
      return {
        ok: true,
        teams,
      };
    } catch (err) {
      throw new Error('error when finding teams');
    }
  }

  @Mutation(() => TeamsResponse)
  async teamsByEmail(
    @Arg('email') email: string
  ): Promise<TeamsResponse | Error> {
    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return {
          ok: false,
          message: 'cannot find user with that email',
          teams: null,
        };
      }

      // gather all teams that you belong (as owner & member)

      const teams = await Team.find({ where: { ownerId: user.id } });

      if (!teams) {
        return {
          ok: false,
          message: 'no teams were found with your account',
          teams: null,
        };
      }

      return {
        ok: true,
        message: '',
        teams,
      };
    } catch (err) {
      throw new Error('something wrong happened');
    }
  }
}
