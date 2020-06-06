import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { HomeHeader } from '../components/Client/HomeHeader';
import { Sidebar } from '../components/Client/Sidebar';

import { ThreadsPage } from '../components/Client/Content/ThreadsPage';
import { MentionPage } from '../components/Client/Content/MentionPage';
import { DraftPage } from '../components/Client/Content/DraftPage';
import { SavedPage } from '../components/Client/Content/SavedPage';

import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
  useParams,
  RouteComponentProps,
} from 'react-router-dom';
import { StaticContext, Redirect } from 'react-router';

// Block
import * as b from '../styles/blocks';

// Svgs
import { Smile } from '../assets/svg';

import { home } from '../styles/sizes';
import { useTeamQuery, useMeQuery } from '../generated/graphql';
import { useClientState, useClientDispatch } from '../context/client-context';
import { AngleRight } from '../assets/svg/Arrows';
import { MenuToggle } from '../components/Client/MenuToggle';

type Props = RouteComponentProps<
  {},
  StaticContext,
  { from: { pathname: string } }
>;

export const ClientRoutes: React.FC<Props> = () => {
  const match = useRouteMatch();

  const groupName = 'bcit-sept-2018';
  const { id } = useParams();

  console.log('client route id', id);

  const [toggle, setToggle] = useState(false);

  // const { data: { team } = {} } = useTeamQuery({
  //   variables: {
  //     teamId: id,
  //   },
  // });

  const { data, loading, error } = useMeQuery();

  if (data) {
    console.log(data);
  }

  return (
    <>
      <Switch>
        <Wrapper>
          {/* {error ? (
            <>
              {!loading && me?.ok && (
                <>
                  <HomeHeader />
                  {toggle ? <MenuToggle /> : null}
                  <ContentWrapper>
                    <Sidebar
                      team={team?.name}
                      displayMenu={() => setToggle(!toggle)}
                    />
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
                  </ContentWrapper>
                </>
              )}
            </>
          ) : (
            <Redirect to='/' />
          )} */}
        </Wrapper>
      </Switch>
    </>
  );
};

const Wrapper = styled(b.Box)`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 37px auto;
`;

const ContentWrapper = styled(b.Box)`
  height: calc(100vh - 37px);
  display: grid;
  grid-template-columns: 220px auto;

  @media ${home.lg} {
    grid-template-columns: 260px auto;
  }
`;
