import {
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  Entity,
  BaseEntity,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { User } from './User';
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

  @ManyToOne(() => User, (user) => user.teams)
  owner: User;

  @Field(() => [Channel])
  @OneToMany(() => Channel, (channel) => channel.team)
  channels: Channel[];

  @Field()
  @Column()
  avatarBackground: string;

  @OneToMany(() => Member, (member) => member.team)
  public members!: Member[];
}
