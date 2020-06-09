import { Mutation, Arg, Query } from 'type-graphql';
import { User } from '../../models/User';
import { sendDigitEmail, sendLinkEmail } from '../../util/sendEmail';
import { redis } from '../../redis';

import { createDigitToken, createStringToken } from '../../util/tokenGenerator';
import { AuthorizationResponse } from '../response/authResponse';

export class RegisterResolver {
  @Mutation(() => AuthorizationResponse)
  async register(
    @Arg('email') email: string,
    @Arg('fullname') fullname: string,
    @Arg('password') password: string
  ): Promise<AuthorizationResponse | Error> {
    try {
      const user = await User.create({
        fullname,
        email,
        password,
      }).save();

      if (!user) {
        return {
          ok: false,
          message: 'unable to create user',
        };
      }

      const digit = Math.floor(100000 + Math.random() * 900000);

      const token = createDigitToken(digit, user);

      await sendDigitEmail(email, digit);

      redis.set(`${digit}`, token);

      return {
        ok: true,
        message: 'successful',
      };
    } catch (err) {
      throw new Error('error occured when registering user');
    }
  }

  @Query(() => AuthorizationResponse)
  async checkEmail(
    @Arg('email') email: string
  ): Promise<AuthorizationResponse | Error> {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return {
          ok: false,
          message: 'email is invalid',
        };
      } else {
        const token = createStringToken(user);
        redis.set(`${token}`, user.id);

        await sendLinkEmail(email, token);
      }

      return {
        ok: true,
        message: '',
      };
    } catch (err) {
      throw new Error('Something wrong happened when checking if email exists');
    }
  }
}
