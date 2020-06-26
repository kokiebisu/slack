import {
  Entity,
  ManyToOne,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Channel } from './Channel';
import { Member } from './Member';

@ObjectType()
@Entity('messages')
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => Number)
  @Column()
  memberId!: number;

  @Field()
  @Column()
  channelId!: string;

  @ManyToOne(() => Member, (member) => member.messages)
  member!: Member;

  @ManyToOne(() => Channel, (channel) => channel.messages)
  channel!: Channel;

  @Field(() => String)
  @Column()
  body: string;

  @Field(() => Date)
  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
