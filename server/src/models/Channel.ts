import { ObjectType, Field } from 'type-graphql';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  Entity,
  OneToMany,
} from 'typeorm';
import { Team } from './Team';
import { ChannelMember } from './ChannelMember';
import { Message } from './Message';

@ObjectType()
@Entity('channels')
export class Channel extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  isPublic: boolean;

  @Field(() => String)
  @Column()
  teamId: string;

  @ManyToOne(() => Team, (team) => team.channels, {
    onDelete: 'CASCADE',
  })
  team: Team;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description: string;

  @OneToMany(() => ChannelMember, (channelmember) => channelmember.channel)
  channelMembers: ChannelMember[];

  @Field(() => Date)
  @Column('bigint', { default: Date.now() })
  created_on: Date;

  @OneToMany(() => Message, (message) => message.channel)
  messages: Message[];
}
