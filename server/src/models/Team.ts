import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { Channel } from './Channel';
import { Member } from './Member';

@ObjectType()
@Entity('teams')
export class Team extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => Int)
  @Column()
  ownerId: number;

  @Field()
  @Column()
  avatarBackground: string;

  @OneToMany(() => Member, (member) => member.team)
  members!: Member[];

  @OneToMany(() => Channel, (channel) => channel.team)
  channels!: Channel[];
}
