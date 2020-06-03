import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import * as b from '../styles/blocks';

import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import { CreateTeamLayout } from '../components/CreateTeam/layout';

// Query
import { useMeQuery } from '../generated/graphql';
import { GetStarted } from '../pages/GetStarted';

interface Props {}

export const CreateRoutes: React.SFC = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [info, setInfo] = useState({
    team: '',
    channel: '',
  });

  console.log('match', match);

  const { data, loading, error } = useMeQuery();

  const addData = (input: string, name: string | undefined) => {
    if (name) {
      setInfo({ ...info, [name]: input });
    }
  };

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
              sendInput={addData}
              nextLink='/create/channelname'
              authenticated={data?.me?.id}
            />
          ) : (
            <Redirect to='/get-started' />
          )}
        </Route>
        <Route path={match.url + '/channelname'}>
          {info.team ? (
            <CreateTeamLayout
              title="What's a project your team is working on?"
              inputPlaceholder='Ex. The very exciting project'
              opacity={0.8}
              name='channel'
              team={info.team}
              sendInput={addData}
              nextLink='/create/tada'
            />
          ) : (
            <Redirect exact to='/get-started' />
          )}
        </Route>
        <Route path={match.url + '/tada'}>
          {info.team && info.channel ? (
            <CreateTeamLayout
              title={`Tada! Meet your team's first channel: #${info.channel}`}
              description="You're leaving those unending email threads in the past. Channels give every project, topic, and team a dedicated space for all their messages and files"
              opacity={1}
              sendInput={addData}
              team={info.team}
              channel={info.channel}
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
