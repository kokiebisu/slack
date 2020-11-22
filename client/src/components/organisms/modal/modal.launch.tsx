import * as React from 'react';
import styled from 'styled-components';

/**
 * Global
 */
import * as b from 'global/blocks';

/**
 * Components
 */
import { Card } from 'components/molecules/card/card.component';

/**
 * Props
 */
import { LaunchModalProps } from './props';

export const LaunchModal: React.FC<LaunchModalProps> = ({
  teams = [
    { id: '1', name: 'Team Name', avatarBackground: 'red' },
    { id: '1', name: 'Team Name', avatarBackground: 'red' },
  ],
}) => {
  return (
    <Wrapper>
      {teams.map((team: any, index) => {
        return (
          <div>
            <Card
              key={team.id}
              name={team.name}
              url={team.id}
              color={team.avatarBackground}
            />
          </div>
        );
      })}
      <b.Box pt={4} pb={3}>
        <OtherOption>
          <b.Anchor href='/get-started/create'>Create a new workspace</b.Anchor>
        </OtherOption>
        <OtherOption mt={3}>
          <b.Anchor href='/signin-workspace'>
            Sign in to another workspace
          </b.Anchor>
        </OtherOption>
      </b.Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 380px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
`;

const OtherOption = styled(b.Box)`
  text-align: center;
  & > a {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.blue};
    font-family: 'CircularPro-Book';

    &:hover {
      text-decoration: underline;
    }
  }
`;
