import { Mutation, Arg } from 'type-graphql';
import { UserTeam } from '../../models/Member';
import { User } from '../../models/User';
import { UserResponse } from '../response/userResponse';

export class RemoveUser {
  @Mutation(() => UserResponse)
  async removeUser(@Arg('userId') userId: number) {
    await UserTeam.delete({ userId });
    await User.delete({ id: userId });
    return true;
  }
}
