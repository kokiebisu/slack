import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import * as b from '../styles/blocks';
import { HeaderLogo } from '../assets/svg/Logo';

import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom';

import { CreateTeamLayout } from '../components/CreateTeam/layout';

// Partials
import { SkeletonLine, MockHashTag } from '../components/CreateTeam/mockup';

interface Props {}

export const CreateTeam: React.FC<RouteComponentProps> = ({ location }) => {
  const [data, setData] = useState({
    team: '',
    channel: '',
  });

  const addData = (input: string, name: string) => {
    setData({ ...data, [name]: input });
  };

  console.log('team', data.team);
  console.log('channel', data.channel);

  return (
    <BrowserRouter>
      <Wrapper>
        <HeaderWrapper>
          <HeaderContainer>
            <b.Container>
              <b.Flex alignItems='center' justifyContent='center'>
                <b.Box top={2} mr={4}>
                  <HeaderLogo width={100} height={60} />
                </b.Box>
              </b.Flex>
            </b.Container>
          </HeaderContainer>
        </HeaderWrapper>
        <Switch>
          <Route path='/create/teamname'>
            <CreateTeamLayout
              title="What's the name of your company or team?"
              inputPlaceholder='Ex. Tesla or Tesla Motors'
              requirePolicy
              opacity={0.15}
              name='team'
              sendInput={addData}
              nextLink='/create/channelname'>
              <TeamWrapper>
                <SkeletonLine width={90} />
              </TeamWrapper>
              <b.Box>
                <SkeletonLine width={60} />
              </b.Box>
              <b.Box mt={2}>
                <b.Flex alignItems='center'>
                  <b.Box mr={1}>
                    <MockHashTag />
                  </b.Box>
                  <SkeletonLine width={80} top={2} />
                </b.Flex>
              </b.Box>
            </CreateTeamLayout>
          </Route>
          <Route path='/create/channelname'>
            <CreateTeamLayout
              title="What's a project your team is working on?"
              inputPlaceholder='Ex. The very exciting project'
              opacity={0.8}
              name='channel'
              sendInput={addData}
              nextLink='/create/invites'>
              <TeamWrapper>
                <b.Text color='white' fontFamily='SlackLato-Black'>
                  {data.team}
                </b.Text>
              </TeamWrapper>
              <b.Box>
                <SkeletonLine width={60} />
              </b.Box>
              <b.Box mt={2}>
                <b.Flex alignItems='center'>
                  <b.Box mr={1}>
                    <MockHashTag />
                  </b.Box>
                  <SkeletonLine width={80} top={2} />
                </b.Flex>
              </b.Box>
            </CreateTeamLayout>
          </Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};

const Wrapper = styled(b.Box)`
  height: 100vh;
  display: grid;
  grid-template-rows: 70px auto;
`;

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
`;

const HeaderContainer = styled.div`
  background-color: white;
  height: 70px;
  border-bottom: 0.5px solid lightgray;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
`;

const TeamWrapper = styled(b.Box)`
  height: 35px;
`;
