import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Channel } from "./channel";
import { Member } from "./member";

@ObjectType()
@Entity()
export class Team extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  ownerId: string;

  @Field()
  @Column()
  avatarBackground: string;

  @OneToMany(() => Member, (member) => member.team)
  members!: Member[];

  @OneToMany(() => Channel, (channel) => channel.team, {
    cascade: true,
  })
  channels!: Channel[];
}
