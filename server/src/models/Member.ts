import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from 'typeorm';
import { User } from './User';
import { Team } from './Team';

@Entity('members')
export class Member {
  @PrimaryGeneratedColumn()
  public memberId: number;

  @Column()
  public userId: number;

  @Column()
  public teamId: number;

  @ManyToOne(() => User, (user) => user.members)
  public user!: User;

  @ManyToOne(() => Team, (team) => team.members)
  public team!: Team;
}
