import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// Routing
import {
  Route,
  Switch,
  useRouteMatch,
  useParams,
  RouteComponentProps,
  Redirect,
} from 'react-router-dom';
import { StaticContext } from 'react-router';

// Pages
import { ThreadsPage } from '../components/Client/section/threads';
import { MentionPage } from '../components/Client/section/mention';
import { DraftPage } from '../components/Client/section/draft';
import { SavedPage } from '../components/Client/section/saved';

// Components
import { HomeHeader } from '../components/Client/HomeHeader';
import { Sidebar } from '../components/Client/sidebar';
import { MenuToggle } from '../components/Client/MenuToggle';

// Block
import * as b from '../styles/blocks';

// Breakpoints
import { home } from '../styles/sizes';

// Graphql
import { useTeamQuery, useMeQuery } from '../generated/graphql';

type Props = RouteComponentProps<
  {},
  StaticContext,
  { from: { pathname: string } }
>;

export const ClientRoutes: React.FC<Props> = () => {
  const match = useRouteMatch();

  const { id } = useParams();

  const [toggle, setToggle] = useState(false);

  const { data: { team } = {} } = useTeamQuery({
    variables: {
      teamId: id,
    },
  });

  const { data: { me } = {}, loading, error } = useMeQuery();

  return (
    <>
      <Switch>
        <Wrapper>
          {error ? (
            <Redirect to='/' />
          ) : (
            <>
              {!loading && me && team && (
                <>
                  <HomeHeader />
                  {toggle ? <MenuToggle /> : null}
                  <ContentWrapper>
                    <Sidebar
                      team={team?.team?.name}
                      displayMenu={() => setToggle(!toggle)}
                    />
                    <Route path={match.url + '/threads'}>
                      <ThreadsPage group={team.team!.name} />
                    </Route>
                    <Route path={match.url + '/activity-page'}>
                      <MentionPage group={team.team!.name} />
                    </Route>
                    <Route path={match.url + '/drafts'}>
                      <DraftPage group={team.team!.name} />
                    </Route>
                    <Route path={match.url + '/saved-page'}>
                      <SavedPage group={team.team!.name} />
                    </Route>
                  </ContentWrapper>
                </>
              )}
            </>
          )}
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
