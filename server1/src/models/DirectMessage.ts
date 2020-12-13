import {
  Entity,
  ManyToOne,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity('direct_messages')
export class DirectMessage extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  fromId!: string;

  @Field(() => String)
  @Column()
  toId!: string;

  @ManyToOne(() => User, (user) => user.messagesReceived)
  from!: User;

  @ManyToOne(() => User, (user) => user.messagesSent)
  to!: User;

  @Field(() => String)
  @Column()
  body: string;

  @Field(() => Date)
  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
