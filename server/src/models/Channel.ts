import { ObjectType, Field } from 'type-graphql';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  Entity,
} from 'typeorm';
import { Team } from './Team';

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
  @Column({ default: true })
  isPublic: boolean;

  @Field(() => String)
  @Column()
  teamId: string;

  @ManyToOne(() => Team, (team) => team.channels)
  team: Team;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description: string;
}
