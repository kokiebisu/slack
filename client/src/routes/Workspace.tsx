import * as React from 'react';

// Routing
import {
  Route,
  Switch,
  useRouteMatch,
  RouteComponentProps,
} from 'react-router-dom';
import { StaticContext, Redirect } from 'react-router';

// Query
import { useMeQuery } from 'generated/graphql';

// Pages
import { ThreadsPage } from 'components/Workspace/Page/Threads';
import { MentionPage } from 'components/Workspace/Page/Mention';
import { DraftPage } from 'components/Workspace/Page/Draft';
import { SavedPage } from 'components/Workspace/Page/Saved';
import { Workspace } from 'pages/Workspace';
import { ChannelPage } from 'components/Workspace/Page/Channel';
import { DirectMessagePage } from 'components/Workspace/Page/DirectMessage';

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
  const { data, loading } = useMeQuery();
  const match = useRouteMatch();
  return (
    <>
      {!loading && data?.me.ok ? (
        <>
          <Route exact path={match.url + '/saved-page'}>
            <SavedPage />
          </Route>
          <Route exact path={match.url + '/threads'}>
            <ThreadsPage />
          </Route>
          <Route path={match.url + '/drafts'}>
            <DraftPage />
          </Route>
          <Route path={match.url + '/activity-page'}>
            <MentionPage />
          </Route>
          <Route path={match.url + '/channel/:channelId'}>
            <ChannelPage />
          </Route>
          <Route path={match.url + '/user/:userId'}>
            <DirectMessagePage />
          </Route>
        </>
      ) : (
        <Redirect to='/' />
      )}
    </>
  );
};
