import * as React from 'react';
import { useState, useEffect } from 'react';
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
  useLocation,
  useRouteMatch,
  useParams,
  RouteComponentProps,
} from 'react-router-dom';
import { StaticContext } from 'react-router';

// Block
import { Box } from '../styles/blocks';

import { home } from '../styles/sizes';
import { useTeamQuery } from '../generated/graphql';
import { useClientState, useClientDispatch } from '../context/client-context';

type Props = RouteComponentProps<
  {},
  StaticContext,
  { from: { pathname: string } }
>;

export const ClientRoutes: React.FC<Props> = () => {
  const match = useRouteMatch();
  const { id } = useParams();
  const groupName = 'bcit-sept-2018';

  const { data, loading, error } = useTeamQuery({
    variables: {
      teamId: id,
    },
  });

  return (
    <>
      <BrowserRouter>
        <Wrapper>
          {!loading && data && (
            <>
              <HomeHeader team={data.team.name} />
              <ContentWrapper>
                <Sidebar team={data.team.name} />
                <Switch>
                  <Route path={match.url + '/threads'}>
                    <ThreadsPage group={groupName} />
                  </Route>
                  <Route path={match.url + '/activity-page'}>
                    <MentionPage group={groupName} />
                  </Route>
                  <Route path={match.url + '/drafts'}>
                    <DraftPage group={groupName} />
                  </Route>
                  <Route path={match.url + '/saved-page'}>
                    <SavedPage group={groupName} />
                  </Route>
                </Switch>
              </ContentWrapper>
            </>
          )}
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
