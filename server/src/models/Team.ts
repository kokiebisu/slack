import {
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  Entity,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './User';
import { ObjectType, Field, Int } from 'type-graphql';
import { Channel } from './Channel';

@ObjectType()
@Entity('teams')
export class Team extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  ownerId: number;

  @ManyToOne(() => User, (user) => user.teams)
  owner: User;

  @Field(() => [Channel])
  @OneToMany(() => Channel, (channel) => channel.team)
  channels: Channel[];
}
