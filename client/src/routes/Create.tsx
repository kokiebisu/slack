import * as React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { CreateTeamLayout } from '../components/CreateTeam/layout';
import { useMeQuery } from '../generated/graphql';
import {
  useNewTeamState,
  useNewTeamDispatch,
} from '../context/newTeam-context';

interface Props {}

export const CreateRoutes: React.SFC = () => {
  const match = useRouteMatch();

  /**
   * Context
   */
  const { team, channel } = useNewTeamState();
  const dispatch = useNewTeamDispatch();

  /**
   * Query
   */
  const { data, loading, error } = useMeQuery();

  return (
    <>
      <Switch>
        <Route path={match.url + '/teamname'}>
          {data?.me?.id ? (
            <CreateTeamLayout
              title="What's the name of your company or team?"
              inputPlaceholder='Ex. Tesla or Tesla Motors'
              requirePolicy
              opacity={0.15}
              name='team'
              sendInput={(input) =>
                dispatch({ type: 'add_team', payload: input })
              }
              nextLink='/create/channelname'
              authenticated={data?.me?.id}
            />
          ) : (
            <Redirect to='/get-started' />
          )}
        </Route>
        <Route path={match.url + '/channelname'}>
          {team ? (
            <CreateTeamLayout
              title="What's a project your team is working on?"
              inputPlaceholder='Ex. The very exciting project'
              opacity={0.8}
              name='channel'
              team={team}
              sendInput={(input) =>
                dispatch({ type: 'add_channel', payload: input })
              }
              nextLink='/create/tada'
            />
          ) : (
            <Redirect exact to='/get-started' />
          )}
        </Route>
        <Route path={match.url + '/tada'}>
          {team && channel ? (
            <CreateTeamLayout
              title={`Tada! Meet your team's first channel: #${channel}`}
              description="You're leaving those unending email threads in the past. Channels give every project, topic, and team a dedicated space for all their messages and files"
              opacity={1}
              sendInput={() => dispatch}
              team={team}
              channel={channel}
              buttonName='See your channel in Slack'
              nextLink='/client'
            />
          ) : (
            <Redirect exact to='/get-started' />
          )}
        </Route>
      </Switch>
    </>
  );
};
