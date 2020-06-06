import { Mutation, Arg } from 'type-graphql';
import { User } from '../../models/User';
import { sendEmail } from '../../util/sendEmail';
import { redis } from '../../redis';

import { createDigitToken } from '../../util/tokenGenerator';
import { AuthorizationResponse } from '../response/authResponse';

export class RegisterResolver {
  @Mutation(() => AuthorizationResponse)
  async register(@Arg('email') email: string): Promise<AuthorizationResponse> {
    const username = email.split('@')[0];

    try {
      const user = await User.create({
        username,
        email,
      }).save();

      if (!user) {
        return {
          ok: false,
          message: 'unable to create user',
        };
      }

      const digit = 123456;

      const token = createDigitToken(digit, user);

      await sendEmail(email, digit);

      redis.set(`${digit}`, token);

      return {
        ok: true,
        message: 'successful',
      };
    } catch (err) {
      return {
        ok: false,
        message: 'there is already a user',
      };
    }
  }
}