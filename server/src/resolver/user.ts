import { User } from "../entity/user";
import { Context } from "../types";
import { getManager } from "typeorm";
import { Ctx, Resolver, Query, Arg, Mutation } from "type-graphql";

@Resolver()
export class UserResolver {
  @Query(() => User)
  async currentUser(@Ctx() { req }: Context): Promise<User | null | undefined> {
    if (!req.session.userId) {
      return null;
    }

    const user = await User.findOne({ id: req.session.userId });
    return user;
  }

  @Query(() => [User])
  users(): Promise<User[] | undefined> {
    const users = User.find();
    return users;
  }

  @Query(() => User, { nullable: true })
  user(@Arg("id", () => String) id: string): Promise<User | undefined> {
    return User.findOne(id);
  }

  @Mutation(() => User)
  createUser(@Arg("email") email: string): Promise<User> {
    return User.create({ email }).save();
  }

  @Mutation(() => User)
  async deleteUser(@Arg("id") id: number): Promise<boolean> {
    await User.delete(id);
    return true;
  }

  @Query(() => [User])
  async getBelongingUsers(
    @Arg("channelId") channelId: string
  ): Promise<User[] | Error> {
    const manager = getManager();
    try {
      const users = await manager.query(
        'select * from channel_members where "channelId" = $1',
        [channelId]
      );
      return users;
    } catch (err) {
      throw new Error(err);
    }
  }
}
