import { Query, Resolver, Ctx, UseMiddleware } from 'type-graphql';
import { User } from '../models/User';
import { Context } from '../interface/context';
import { isAuth } from '../middleware/isAuthenticated';
import { verify } from 'jsonwebtoken';

@Resolver()
export class UsersResolver {
  @Query(() => User, { nullable: true })
  me(@Ctx() { req }: Context) {
    const authorization = req.headers.authorization;
    if (!authorization) {
      return null;
    }

    try {
      const token = authorization.split(' ')[1];
      const { userId }: any = verify(token, process.env.ACCESS_TOKEN_SECRET!);
      return User.findOne(userId);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  @Query(() => [User])
  async users() {
    const users = await User.find();
    return users;
  }
}
