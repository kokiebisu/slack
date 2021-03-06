import { ObjectType, Field } from "type-graphql";
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  Entity,
  OneToMany,
} from "typeorm";

import { Team } from "./team";
import { ChannelMember } from "./channel-member";
import { Message } from "./message";
import { User } from "./user";

@ObjectType()
@Entity()
export class Channel extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
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

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, default: "Add a topic" })
  topic: string;

  @ManyToOne(() => Team, (team) => team.channels, {
    onDelete: "CASCADE",
  })
  team: Team;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description: string;

  @OneToMany(() => ChannelMember, (channelmember) => channelmember.channel)
  channelMembers: ChannelMember[];

  @Field(() => Date)
  @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @OneToMany(() => Message, (message) => message.channel)
  messages: Message[];

  @ManyToOne(() => User, (user) => user.channels)
  creator: User;
}
