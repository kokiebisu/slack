import * as React from "react";

// Routing
import {
  Route,
  Switch,
  useRouteMatch,
  RouteComponentProps,
} from "react-router-dom";
import { StaticContext, Redirect } from "react-router";

// Query
import { useMeQuery } from "generated/graphql";

import { Prototype } from "components/prototype/workspace/workspace.component";
import { Workspace } from "pages/Workspace";

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
          <Route exact path={match.url + "/saved-page"}>
            <Prototype variant="saved" />
          </Route>
          <Route exact path={match.url + "/threads"}>
            <Prototype variant="threads" />
          </Route>
          <Route path={match.url + "/drafts"}>
            <Prototype variant="drafts" />
          </Route>
          <Route path={match.url + "/activity-page"}>
            <Prototype variant="mention" />
          </Route>
          <Route path={match.url + "/channel/:channelId"}>
            <Prototype variant="channel" />
          </Route>
          <Route path={match.url + "/user/:userId"}>
            <Prototype variant="directmessage" />
          </Route>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};
