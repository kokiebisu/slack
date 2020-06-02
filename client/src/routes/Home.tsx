import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';

import { HomeHeader } from '../components/Home/HomeHeader';
import { Sidebar } from '../components/Home/Sidebar';

import { ThreadsPage } from '../components/Home/Content/ThreadsPage';
import { MentionPage } from '../components/Home/Content/MentionPage';
import { DraftPage } from '../components/Home/Content/DraftPage';
import { SavedPage } from '../components/Home/Content/SavedPage';

import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';

// Block
import { Box } from '../styles/blocks';

import { home } from '../styles/sizes';

interface Props {}

export const Home: React.FC<RouteComponentProps> = ({ location }) => {
  // const { data, loading, error } = useQuery(ALL_USERS);
  const groupName = 'bcit-sept-2018';

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error!</p>;

  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <HomeHeader />
          <ContentWrapper>
            <Sidebar />
            <Switch>
              <Route path='/client/threads'>
                <ThreadsPage group={groupName} />
              </Route>
              <Route path='/client/activity-page'>
                <MentionPage group={groupName} />
              </Route>
              <Route path='/client/drafts'>
                <DraftPage group={groupName} />
              </Route>
              <Route path='/client/saved-page'>
                <SavedPage group={groupName} />
              </Route>
            </Switch>
          </ContentWrapper>
        </Wrapper>
      </BrowserRouter>
    </>
  );
};

const Wrapper = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 37px auto;
`;

const ContentWrapper = styled(Box)`
  height: calc(100vh - 37px);
  display: grid;
  grid-template-columns: 220px auto;

  @media ${home.lg} {
    grid-template-columns: 260px auto;
  }
`;