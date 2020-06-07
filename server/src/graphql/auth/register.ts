import { Mutation, Arg } from 'type-graphql';
import { User } from '../../models/User';
import { sendEmail } from '../../util/sendEmail';
import { redis } from '../../redis';

import { createDigitToken } from '../../util/tokenGenerator';
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

      const digit = 123456;

      const token = createDigitToken(digit, user);

      await sendEmail(email, digit);

      redis.set(`${digit}`, token);

      return {
        ok: true,
        message: 'successful',
      };
    } catch (err) {
      throw new Error('error occured when registering user');
    }
  }
}
