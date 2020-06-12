import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { Team } from './Team';
import { Member } from './Member';

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

  @Column('bool', { default: false })
  confirmed: boolean;

  @Column('int', { default: 0 })
  tokenVersion: number;

  @OneToMany(() => Team, (team) => team.ownerId)
  teams: Team[];

  @Column()
  password: string;
}
