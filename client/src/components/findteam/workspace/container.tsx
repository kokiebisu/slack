import * as React from 'react';

// Blocks
import * as b from '../../../styles/blocks';

// Components
import { AvailableWorkspace } from '.';

interface Props {
  teams: any;
}

interface Team {
  id: string;
  name: string;
}

export const AvailableWorkspaces: React.FC<Props> = ({ teams }) => {
  return (
    <b.Box>
      {teams.map((team: Team) => {
        return <AvailableWorkspace name={team.name} url={team.id} />;
      })}
    </b.Box>
  );
};
