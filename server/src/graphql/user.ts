import { Query, Resolver, Ctx, UseMiddleware } from 'type-graphql';
import { User } from '../models/User';
import { Context } from '../types/context';
import { isAuth } from '../middleware/isAuthenticated';
import { verify } from 'jsonwebtoken';

@Resolver()
export class UsersResolver {
  @Query(() => User, { nullable: true })
  me(@Ctx() context: Context) {
    const authorization = context.req.headers.authorization;

    if (!authorization) {
      return null;
    }

    try {
      const token = authorization.split(' ')[1];
      const payload: any = verify(token, process.env.ACCESS_TOKEN_SECRET!);
      return User.findOne(payload.userId);
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
