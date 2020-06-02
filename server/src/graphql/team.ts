import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { Context } from '../interface/Context';
import { verify } from 'jsonwebtoken';

@Resolver()
export class TeamResolvers {
  @Query(() => [Team])
  async teams() {
    return await Team.find();
  }

  @Mutation(() => Team, { nullable: true })
  async createTeam(@Arg('name') name: string, @Ctx() { req }: Context) {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return null;
    }

    try {
      const token = authorization.split(' ')[1];
      const { userId }: any = verify(token, process.env.ACCESS_TOKEN_SECRET!);

      const team = await Team.create({ name, ownerId: userId }).save();
      return team;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
