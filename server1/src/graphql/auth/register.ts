import { Mutation, Arg, Query } from 'type-graphql';
import { User } from '../../models/User';
import { sendDigitEmail, sendLinkEmail } from '../../util/sendEmail';
import { redis } from '../../redis';

import { createDigitToken, createStringToken } from '../../util/tokenGenerator';
import { AuthorizationResponse } from '../response/authResponse';
import { getManager } from 'typeorm';

const manager = getManager();

export class RegisterResolver {
  @Mutation(() => AuthorizationResponse)
  async register(
    @Arg('email') email: string,
    @Arg('fullname') fullname: string,
    @Arg('password') password: string,
    @Arg('avatarBackground') avatarBackground: string
  ) {
    try {
      const user = await manager
        .create(User, {
          fullname,
          email,
          password,
          avatarBackground,
        })
        .save();

      // const digit = Math.floor(100000 + Math.random() * 900000);
      const digit = 111111;

      const token = createDigitToken(digit, user);

      await sendDigitEmail(email, digit);

      redis.set(`${digit}`, token);

      return {
        ok: true,
        errorlog: 'successful',
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  @Query(() => AuthorizationResponse)
  async checkEmail(
    @Arg('email') email: string
  ): Promise<AuthorizationResponse | Error> {
    try {
      const user = await manager.findOne(User, {
        email,
      });

      if (!user) {
        return {
          ok: false,
          errorlog: 'email is invalid',
        };
      }

      const token = createStringToken(user);
      redis.set(`${token}`, user.id);

      await sendLinkEmail(email, token);

      return {
        ok: true,
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
