import { Mutation, Arg, Resolver } from 'type-graphql';
import { User } from '../../models/User';
import { getManager } from 'typeorm';
import { BaseResponse } from '../response/baseResponse';

const manager = getManager();

@Resolver()
export class RemoveUserResolver {
  @Mutation(() => BaseResponse)
  async removeUser(@Arg('userId') userId: number) {
    await manager.query('delete from members where "userId"=$1', [userId]);
    await manager.query('delete from teams where "ownerId"=$1', [userId]);
    await manager.delete(User, { id: userId });
    return {
      ok: true,
    };
  }
}
