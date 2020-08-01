import * as React from 'react';

// Blocks
import * as b from 'styles/blocks';

// Components
import { AvailableWorkspace } from '.';

interface Props {
  teams: any;
}

interface Team {
  id: string;
  name: string;
  avatarBackground: string;
}

export const AvailableWorkspaces: React.FC<Props> = ({ teams }) => {
  return (
    <>
      <b.Box>
        {teams.map((team: Team) => {
          return (
            <AvailableWorkspace
              key={team.id}
              name={team.name}
              url={team.id}
              avatarBackground={team.avatarBackground}
            />
          );
        })}
      </b.Box>
    </>
  );
};
