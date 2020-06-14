import { UserTeam } from '../models/Member';
import { In } from 'typeorm';
import { User } from '../models/User';

import DataLoader from 'dataloader';

const batchUsers = async (teamIds: string[]) => {
  const userTeams = await UserTeam.find({
    join: {
      alias: 'userTeam',
      innerJoinAndSelect: {
        user: 'userTeam.user',
      },
    },
    where: {
      teamId: In(teamIds),
    },
  });

  const teamIdToUsers: { [key: string]: User[] } = {};

  userTeams.forEach((ut) => {
    if (ut.teamId in teamIdToUsers) {
      teamIdToUsers[ut.teamId].push((ut as any).__user__);
    } else {
      teamIdToUsers[ut.teamId] = [(ut as any).__user__];
    }
  });

  return teamIds.map((teamId) => teamIdToUsers[teamId]);
};

export const createUsersLoader = () => new DataLoader(batchUsers);
