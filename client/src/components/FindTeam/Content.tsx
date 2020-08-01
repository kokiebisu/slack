import * as React from 'react';
import styled from 'styled-components';

// Blocks
import * as b from 'global/blocks';

// Styles
import { Header, Title, Description } from 'styles/FindTeam/Content';
import { AvailableWorkspaces } from 'components/FindTeam/Workspaces';

// Sizes
import { size } from 'global/sizes';

interface Props {
  teams: any;
}

export const FindTeamContent: React.FC<Props> = ({ teams }) => {
  return (
    <b.Box backgroundColor='white__dark'>
      <b.Box py={5}>
        <b.Flex justifyContent='center'>
          <Container>
            <b.Box>
              <b.Flex justifyContent='center'>
                <Header>
                  <Title>
                    <b.Text>Your workspaces</b.Text>
                  </Title>
                  <Description my={3}>
                    <b.Text>
                      You're already a member of these Slack teams:
                    </b.Text>
                  </Description>
                </Header>
              </b.Flex>
            </b.Box>
            <AvailableWorkspaces teams={teams} />
            <b.Box>
              <b.Flex justifyContent='center'>
                <ShowMore my={4}>
                  <b.Text>Show 5 more workspaces</b.Text>
                </ShowMore>
              </b.Flex>
            </b.Box>
            <b.Box>
              <b.Flex justifyContent='center'>
                <NotFound>
                  <b.Text>
                    Looking for a different workspace? You can try{' '}
                    <span className='anotheremail'>another email address</span>{' '}
                    or ask your Workspace Administrator for an invitation.
                  </b.Text>
                </NotFound>
              </b.Flex>
            </b.Box>
          </Container>
        </b.Flex>
      </b.Box>
    </b.Box>
  );
};

const ShowMore = styled(b.Button)`
  & > p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.blue};
    font-family: 'SlackLato-Regular';

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const NotFound = styled(b.Box)`
  & > p {
    font-family: 'SlackLato-Regular';
    line-height: 1.5;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray__light};
    & > span {
      color: ${({ theme }) => theme.colors.blue};
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Container = styled(b.Box)`
  padding: 0 15px;
  @media ${size.sm} {
    max-width: 570px;
    width: 100%;
  }
`;
