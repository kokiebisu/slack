import { Query, Arg } from 'type-graphql';
import { Member } from '../../models/Member';
import { MembersResponse } from '../response/memberResponse';
import { createQueryBuilder, getConnection, getRepository } from 'typeorm';

export class MemberResolver {
  @Query(() => MembersResponse)
  async getMembersByUser(@Arg('userId') userId: number) {
    // select m.id, t.name, u.fullname from members m inner join teams t on m."teamId" = t.id inner join users u on m."userId" = u.id;

    // const user = await createQueryBuilder("user")
    // .innerJoinAndSelect("user.photos", "photo", "photo.isRemoved = :isRemoved", { isRemoved: false })
    // .where("user.name = :name", { name: "Timber" })
    // .getOne();

    // const team = await getConnection()
    // .createQueryBuilder()
    // .relation(Member, "categories")
    // .of(post) // you can use just post id as well
    // .loadMany();

    // const members = await getRepository(Member)
    //   .createQueryBuilder()
    //   .select('user')
    //   .innerJoinAndSelect('user.members', 'members')
    //   .where('user.name = :userId', { userId: 1 })
    //   .getOne();

    // console.log('entered members', members);

    // const members = await UserTeam.find({ where: { teamId } });
    return {
      ok: true,
      message: false,
      // members,
    };
  }
  // @Query(() => MembersResponse)
  // async getMembersByUser(@Arg('userId') userId: number) {
  //   const members = await UserTeam.find({ where: { userId } });
  //   return {
  //     ok: true,
  //     message: false,
  //     members,
  //   };
  // }
}
