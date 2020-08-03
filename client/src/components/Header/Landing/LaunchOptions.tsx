import * as React from 'react';
import * as b from 'global/blocks';

// Styles
import { Wrapper, OtherOption } from 'styles/Header/Landing/LaunchOptions';

// Components
import { WorkspaceOption } from 'components/Header/Landing/LaunchOption';

interface Props {
  teams: Team[];
}

interface Team {
  id: string;
  name: string;
  avatarBackground: string;
}

export const LaunchOptions: React.FC<Props> = ({ teams }) => {
  return (
    <Wrapper>
      <b.Box>
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
