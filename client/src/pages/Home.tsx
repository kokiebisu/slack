import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';

import { HomeHeader } from '../components/Client/HomeHeader';
import { Sidebar } from '../components/Client/sidebar';

import { ThreadsPage } from '../components/Client/section/threads';
import { MentionPage } from '../components/Client/section/mention';
import { DraftPage } from '../components/Client/section/draft';
import { SavedPage } from '../components/Client/section/saved';

import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';

// Block
import { Box } from '../styles/blocks';

import { home } from '../styles/sizes';

interface Props {}

export const Home: React.FC<Props> = () => {
  const location = useLocation();
  const groupName = 'bcit-sept-2018';

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
