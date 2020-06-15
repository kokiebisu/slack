import {
  Entity,
  ManyToOne,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { User } from './User';
import { Team } from './Team';
import { ObjectType, Field } from 'type-graphql';
import { Message } from './Message';

@ObjectType()
@Entity('members')
export class Member extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  teamId!: string;

  @Field(() => Number)
  @Column()
  userId!: number;

  @ManyToOne(() => User, (user) => user.members)
  user!: User;

  @ManyToOne(() => Team, (team) => team.members)
  team!: Team;

  @OneToMany(() => Message, (message) => message.member)
  messages: Message[];
}
