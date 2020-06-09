import * as React from 'react';

// Routing
import {
  Route,
  Switch,
  useRouteMatch,
  RouteComponentProps,
} from 'react-router-dom';
import { StaticContext, Redirect } from 'react-router';

// Pages
import { ThreadsPage } from '../components/workspace/content/threads';
import { MentionPage } from '../components/workspace/content/mention';
import { DraftPage } from '../components/workspace/content/draft';
import { SavedPage } from '../components/workspace/content/saved';

import { Workspace } from '../components/workspace/layout';
import { useMeQuery } from '../generated/graphql';

type Props = RouteComponentProps<
  {},
  StaticContext,
  { from: { pathname: string } }
>;

export const ClientRoutes: React.FC<Props> = () => {
  return (
    <>
      <Switch>
        <Workspace route={<WorkspaceRoute />} />
      </Switch>
    </>
  );
};

export const WorkspaceRoute: React.FC<{}> = () => {
  const { data, loading, error } = useMeQuery();
  const match = useRouteMatch();
  return (
    <>
      {!loading && data?.me.ok ? (
        <>
          <Route path={match.url + '/saved-page'}>
            <SavedPage />
          </Route>
          <Route path={match.url + '/threads'}>
            <ThreadsPage />
          </Route>
          <Route path={match.url + '/drafts'}>
            <DraftPage />
          </Route>
          <Route path={match.url + '/activity-page'}>
            <MentionPage />
          </Route>
        </>
      ) : (
        <Redirect to='/' />
      )}
    </>
  );
};
