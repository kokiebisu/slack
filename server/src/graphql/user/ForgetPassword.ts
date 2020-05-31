import { v4 } from 'uuid';
import { Resolver, Mutation, Arg } from 'type-graphql';
import { redis } from '../../redis';
import { sendEmail } from '../../util/sendEmail';
import { User } from '../../models/User';
import { forgotPasswordPrefix } from '../../constants/redisPrefixes';

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
