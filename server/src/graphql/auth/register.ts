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
    @Arg('password') password: string
  ) {
    try {
      const user = await manager
        .create(User, {
          fullname,
          email,
          password,
        })
        .save();

      const userId = await manager.getId(user);

      const digit = Math.floor(100000 + Math.random() * 900000);

      console.log('user', userId);
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
      const user = await manager.query(`select * from users where email=$1`, [
        email,
      ]);

      if (user.length === 0) {
        return {
          ok: false,
          message: 'email is invalid',
        };
      } else {
        const token = createStringToken(user[0]);
        redis.set(`${token}`, user[0].id);

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
