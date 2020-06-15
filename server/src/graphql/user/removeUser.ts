import { Mutation, Arg } from 'type-graphql';
import { User } from '../../models/User';
import { getManager } from 'typeorm';
import { BaseResponse } from '../response/baseResponse';

const manager = getManager();

export class RemoveUser {
  @Mutation(() => BaseResponse)
  async removeUser(@Arg('userId') userId: number) {
    await manager.query('delete from members where "userId"=$1', [userId]);
    await manager.query('delete from teams where "ownerId"=$1', [userId]);
    await User.delete({ id: userId });
    return {
      ok: true,
    };
  }
}
