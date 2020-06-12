import {
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { User } from './User';
import { Team } from './Team';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity('members')
export class Member extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  teamId: string;

  @Field(() => Number)
  @PrimaryColumn()
  userId: number;

  @ManyToOne(() => User, (user) => user.id, { primary: true })
  @JoinColumn({ name: 'userId' })
  user: Promise<User>;

  @ManyToOne(() => Team, (team) => team.id, { primary: true })
  @JoinColumn({ name: 'teamId' })
  team: Promise<Team>;
}
