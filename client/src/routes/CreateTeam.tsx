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
  Redirect,
  useHistory,
} from 'react-router-dom';

import { CreateTeamLayout } from '../components/CreateTeam/layout';
import { ConfirmAccount } from './ConfirmAccount';
// Partials
import { SkeletonLine, MockHashTag } from '../components/CreateTeam/mockup';

interface Props {}

export const CreateTeam: React.FC<Props> = () => {
  const history = useHistory();
  const [data, setData] = useState({
    team: '',
    channel: '',
  });

  const addData = (input: string, name: string | undefined) => {
    if (name) {
      setData({ ...data, [name]: input });
    }
  };

  return (
    <BrowserRouter>
      <Switch>
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
          <Route exact path='/create/teamname'>
            <CreateTeamLayout
              title="What's the name of your company or team?"
              inputPlaceholder='Ex. Tesla or Tesla Motors'
              requirePolicy
              opacity={0.15}
              name='team'
              sendInput={addData}
              nextLink='/create/channelname'
            />
          </Route>
          <Route exact path='/create/channelname'>
            {data.team ? (
              <CreateTeamLayout
                title="What's a project your team is working on?"
                inputPlaceholder='Ex. The very exciting project'
                opacity={0.8}
                name='channel'
                team={data.team}
                sendInput={addData}
                nextLink='/create/tada'
              />
            ) : (
              <Redirect to='/' />
            )}
          </Route>
          <Route exact path='/create/tada'>
            {data.team && data.channel ? (
              <CreateTeamLayout
                title={`Tada! Meet your team's first channel: #${data.channel}`}
                description="You're leaving those unending email threads in the past. Channels give every project, topic, and team a dedicated space for all their messages and files"
                opacity={1}
                sendInput={addData}
                team={data.team}
                channel={data.channel}
                buttonName='See your channel in Slack'
                nextLink='/client'
              />
            ) : (
              <Redirect to='/' />
            )}
          </Route>
        </Wrapper>
      </Switch>
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
