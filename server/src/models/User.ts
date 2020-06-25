import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { Member } from './Member';
import { ChannelMember } from './ChannelMember';
import { Channel } from './Channel';
import { DirectMessage } from './DirectMessage';

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  fullname: string;

  @Field()
  @Column('text', { unique: true })
  email: string;

  @Column()
  password: string;

  @Column('bool', { default: false })
  confirmed: boolean;

  @Column('int', { default: 0 })
  tokenVersion: number;

  @OneToMany(() => Member, (member) => member.user)
  members!: Member[];

  @OneToMany(() => ChannelMember, (channelmember) => channelmember.user)
  channelMembers!: ChannelMember[];

  @Field()
  @Column()
  avatarBackground: string;

  // The channels started by user
  @OneToMany(() => Channel, (channel) => channel.creator)
  channels: Channel[];

  @OneToMany(() => DirectMessage, (directMessage) => directMessage.from)
  messagesReceived: DirectMessage[];

  @OneToMany(() => DirectMessage, (directMessage) => directMessage.to)
  messagesSent: DirectMessage[];
}
