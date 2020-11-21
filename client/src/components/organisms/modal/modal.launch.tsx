import * as React from 'react';
import * as b from 'global/blocks';

// Styles
import { Wrapper, OtherOption } from 'styles/Header/Landing/LaunchOptions';

// Components
import { WorkspaceOption } from 'components/Header/Landing/LaunchOption';
import { LaunchModalProps } from './props';

export const LaunchModal: React.FC<LaunchModalProps> = ({
  teams = [
    { id: '1', name: 'Team Name', avatarBackground: 'red' },
    { id: '1', name: 'Team Name', avatarBackground: 'red' },
  ],
}) => {
  return (
    <Wrapper>
      <b.Box>
        {teams.map((team: any) => {
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
          <OtherOption>
            <b.Anchor href='/get-started/create'>
              Create a new workspace
            </b.Anchor>
          </OtherOption>
          <OtherOption mt={3}>
            <b.Anchor href='/signin-workspace'>
              Sign in to another workspace
            </b.Anchor>
          </OtherOption>
        </b.Box>
      </b.Box>
    </Wrapper>
  );
};
