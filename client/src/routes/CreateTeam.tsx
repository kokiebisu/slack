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

import { CreateTeamLayout } from '../components/shared/CreateTeam/layout';

interface Props {}

export const CreateTeam: React.FC<RouteComponentProps> = ({ location }) => {
  const [data, setData] = useState({
    team: '',
    channel: '',
  });

  const addData = (input, name) => {
    setData({ ...data, [name]: input });
  };

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
              requirePolicy
              opacity={0.15}
              name='team'
              sendInput={addData}
            />
          </Route>
          <Route path='/create/channelname'>
            <CreateTeamLayout
              title="What's a project your team is working on?"
              opacity={0.3}
            />
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
