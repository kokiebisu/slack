import { UseMiddleware, Resolver, Query, Mutation, Arg } from 'type-graphql';
import bcrypt from 'bcryptjs';
import { User } from '../../models/User';
import { RegisterInput } from './RegisterInput';
import { isAuth } from '../../middleware/isAuthenticated';
import { logger } from '../../middleware/logger';
import { createConfirmationUrl } from '../../util/createConfirmationUrl';
import { sendEmail } from '../../util/sendEmail';

@Resolver()
export class RegisterResolver {
  @UseMiddleware(logger, isAuth)
  @Query(() => String!)
  async hello() {
    return 'Hello';
  }

  @Mutation(() => User)
  async register(
    @Arg('data') { username, email, password }: RegisterInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    }).save();

    await sendEmail(email, await createConfirmationUrl(user.id));

    return user;
  }
}
