import { ObjectType, Field, Int } from 'type-graphql';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  Entity,
  JoinColumn,
} from 'typeorm';
import { Team } from './Team';

@ObjectType()
@Entity('channels')
export class Channel extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ default: true })
  public: boolean;

  @Field()
  @Column()
  teamId: number;

  @ManyToOne(() => Team, (team) => team.channels)
  team: Team;
}
