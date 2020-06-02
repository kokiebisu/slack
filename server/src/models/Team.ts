import {
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  Entity,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { User } from './User';
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
@Entity('teams')
export class Team extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ nullable: true })
  ownerId: number;

  @ManyToOne(() => User, (user) => user.teams)
  owner: User;
}
