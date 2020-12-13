import {
  Query,
  Arg,
  Resolver,
  Mutation,
  Ctx,
  UseMiddleware,
} from "type-graphql";
import { Context } from "../types";
import { Team } from "../entity/team";
import { isAuth } from "../middleware/isAuth";
import { getManager } from "typeorm";
import { Member } from "../entity/member";

const manager = getManager();

@Resolver()
export class TeamResolver {
  @Query(() => [Team])
  async teams(): Promise<Team[] | Error> {
    try {
      const teams = await Team.find({ relations: ["members"] });
      return teams;
    } catch (err) {
      throw new Error(err);
    }
  }

  @UseMiddleware(isAuth)
  @Mutation(() => Team)
  async createTeam(
    @Arg("name") name: string,
    @Arg("avatarBackground") avatarBackground: string,
    @Ctx() { req }: Context
  ): Promise<Team | undefined> {
    try {
      const userId = req.session!.userId;

      const team = await Team.create({
        name,
        avatarBackground,
        ownerId: userId,
      }).save();

      await manager.query(
        'insert into members ("teamId", "userId") values ($1, $2)',
        [team.id, userId]
      );

      return team;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(() => Boolean)
  async removeTeam(@Arg("teamId") teamId: string): Promise<Boolean | Error> {
    try {
      await Member.delete({ teamId });
      await Team.delete({ id: teamId });
      return true;
    } catch (err) {
      throw new Error(err);
    }
  }

  @UseMiddleware(isAuth)
  @Query(() => [Team])
  async myTeams(@Ctx() { req }: Context): Promise<Team[] | Error> {
    try {
      const userId = req.session!.userId;
      const teams = await Team.find({ where: { ownerId: userId } });
      return teams;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Query(() => Team)
  async team(@Arg("teamId") teamId: string): Promise<Team | Error | null> {
    try {
      const team = await Team.findOne(
        { id: teamId },
        { relations: ["channels"] }
      );
      if (!team) {
        return null;
      }
      return team;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Query(() => [Team])
  async getBelongingTeams(@Ctx() { req }: Context): Promise<Team[] | Error> {
    try {
      const userId = req.session!.userId;

      const teams = await manager.query(
        `select t.name, t.id, t."avatarBackground" from members m inner join teams t on m."teamId" = t.id inner join users u on m."userId" = u.id where u.id=$1`,
        [userId]
      );

      return teams;
    } catch (err) {
      throw new Error(err);
    }
  }
}
