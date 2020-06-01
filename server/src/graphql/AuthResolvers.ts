import {
  Query,
  Resolver,
  Mutation,
  Arg,
  Ctx,
  ObjectType,
  Field,
  Int,
} from 'type-graphql';

// Helper
import { createConfirmationUrl } from '../util/createConfirmationUrl';
import { sendEmail } from '../util/sendEmail';

// Custom Inputs
import { ChangePasswordInput } from './auth/inputs';

import { v4 } from 'uuid';
import bcrypt from 'bcryptjs';

// Entity
import { User } from '../models/User';

// Cache
import { redis } from '../redis';

// Prefixes
import {
  forgotPasswordPrefix,
  confirmationPrefix,
} from '../constants/redisPrefixes';

// Types
import { Context } from '../types/context';
import { createAccessToken, createRefreshToken } from '../util/tokenGenerator';

import { sendRefreshToken } from '../util/sendRefreshToken';

import { getConnection } from 'typeorm';

@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() context: Context): Promise<User | undefined> {
    if (!context.req.session!.userId) {
      return undefined;
    }

    return User.findOne(context.req.session!.userId);
  }
}

@Resolver()
export class RegisterResolver {
  @Mutation(() => User)
  async register(
    @Arg('username') username: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<User | ErrorConstructor> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    }).save();

    // await sendEmail(email, await createConfirmationUrl(user.id));
    User.update({ id: user.id }, { confirmed: true });

    return user;
  }
}

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

@Resolver()
export class LoginResolver {
  @Mutation(() => Boolean)
  async revokeRefreshToken(@Arg('userId', () => Int) userId: number) {
    await getConnection()
      .getRepository(User)
      .increment({ id: userId }, 'tokenVersion', 1);

    return true;
  }

  @Mutation(() => LoginResponse, { nullable: true })
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() { req, res }: Context
  ): Promise<LoginResponse | Error> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return new Error('Cannot find user');
    }

    // Check it the given password is the same as the user's password in database
    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return new Error('Password is incorrect');
    }

    if (!user.confirmed) {
      return new Error('You must confirm via email');
    }

    sendRefreshToken(res, createRefreshToken(user));

    return {
      // sign method will create the token
      accessToken: createAccessToken(user),
    };
  }
}

@Resolver()
export class LogoutResolver {
  @Mutation(() => Boolean)
  async logout(@Ctx() context: Context): Promise<boolean> {
    return new Promise((res, rej) => {
      context.req.session!.destroy((err) => {
        if (err) {
          console.log(err);
          return rej(false);
        }
      });

      context.res.clearCookie('quid');
      return res(true);
    });
  }
}

@Resolver()
export class ChangePasswordResolver {
  @Mutation(() => User, { nullable: true })
  async changePassword(
    @Arg('token') token: string,
    @Arg('password') password: string,
    @Ctx() context: Context
  ): Promise<User | null> {
    const userId = await redis.get(forgotPasswordPrefix + token);

    if (!userId) {
      return null;
    }

    const user = await User.findOne(userId);

    if (!user) {
      return null;
    }

    await redis.del(forgotPasswordPrefix + token);

    user.password = await bcrypt.hash(password, 12);

    await user.save();

    context.req.session!.userId = user.id;

    return user;
  }
}

@Resolver()
export class ConfirmLoginResolver {
  @Mutation(() => Boolean)
  async confirmUser(@Arg('token') token: string): Promise<boolean> {
    const userId = await redis.get(confirmationPrefix + token);

    if (!userId) {
      return false;
    }

    User.update({ id: parseInt(userId, 10) }, { confirmed: true });

    await redis.del(token);

    return true;
  }
}

@Resolver()
export class ForgetPasswordResolver {
  @Mutation(() => Boolean)
  async forgotPassword(@Arg('email') email: string): Promise<boolean> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return false;
    }

    const token = v4();
    await redis.set(forgotPasswordPrefix + token, user.id, 'ex', 60 * 60 * 24);

    await sendEmail(
      email,
      `http://localhost:3000/user/change-password/${token}`
    );

    return true;
  }
}
