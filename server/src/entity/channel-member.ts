import {
  Entity,
  ManyToOne,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user";
import { ObjectType, Field } from "type-graphql";
import { Channel } from "./channel";

@ObjectType()
@Entity("channel_members")
export class ChannelMember extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  userId!: string;

  @Field(() => String)
  @Column()
  channelId!: string;

  @ManyToOne(() => User, (user) => user.channelMembers)
  user!: User;

  @ManyToOne(() => Channel, (channel) => channel.channelMembers)
  channel!: Channel;
}
