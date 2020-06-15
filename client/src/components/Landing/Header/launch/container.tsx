import * as React from 'react';
import * as b from '../../../../styles/blocks';

// Styles
import {
  LaunchOptionWrapper,
  LaunchOption,
  LaunchOptionLink,
} from './container.styles';

// Components
import { WorkspaceOption } from '.';

interface Props {
  teams: Team[];
}

interface Team {
  id: string;
  name: string;
  url: string;
  color: string;
}

export const LaunchOptions: React.FC<Props> = ({ teams }) => {
  return (
    <LaunchOptionWrapper>
      <LaunchOption>
        {teams.map((team: Team) => {
          return (
            <WorkspaceOption
              key={team.id}
              name={team.name}
              url={team.id}
              color={team.avatarBackground}
            />
          );
        })}
        <b.Box pt={4} pb={3}>
          <b.Box>
            <LaunchOptionLink
              href='/get-started/create'
              color='blue'
              fontFamily='CircularPro-Book'>
              <b.Text textAlign='center'>Create a new workspace</b.Text>
            </LaunchOptionLink>
          </b.Box>
          <b.Box mt={3}>
            <LaunchOptionLink
              href='/signin-workspace'
              color='blue'
              fontFamily='CircularPro-Book'>
              <b.Text textAlign='center'>Sign in to another workspace</b.Text>
            </LaunchOptionLink>
          </b.Box>
        </b.Box>
      </LaunchOption>
    </LaunchOptionWrapper>
  );
};
