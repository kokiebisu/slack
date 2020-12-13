import {
  Entity,
  ManyToOne,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { User } from "./user";
import { Team } from "./team";
import { ObjectType, Field } from "type-graphql";
import { Message } from "./message";

@ObjectType()
@Entity("members")
export class Member extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  teamId!: string;

  @Field(() => String)
  @Column()
  userId!: string;

  @ManyToOne(() => User, (user) => user.members)
  user!: User;

  @ManyToOne(() => Team, (team) => team.members)
  team!: Team;

  @OneToMany(() => Message, (message) => message.member)
  messages: Message[];
}
