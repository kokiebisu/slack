import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Member } from "./member";
import { ChannelMember } from "./channel-member";
import { Channel } from "./channel";
import { DirectMessage } from "./direct-message";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column()
  fullname: string;

  @Column()
  password: string;

  @OneToMany(() => Member, (member) => member.user)
  members!: Member[];

  @OneToMany(() => ChannelMember, (channelmember) => channelmember.user)
  channelMembers!: ChannelMember[];

  @Field()
  @Column()
  avatarBackground: string;

  @OneToMany(() => Channel, (channel) => channel.creator)
  channels: Channel[];

  @OneToMany(() => DirectMessage, (directMessage) => directMessage.from)
  messagesReceived: DirectMessage[];

  @OneToMany(() => DirectMessage, (directMessage) => directMessage.to)
  messagesSent: DirectMessage[];
}
