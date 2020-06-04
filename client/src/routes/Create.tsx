import * as React from 'react';
import { useState } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import { CreateTeamLayout } from '../components/CreateTeam/layout';
import {
  useMeQuery,
  useCreateTeamMutation,
  useCreateChannelMutation,
} from '../generated/graphql';
import {
  useNewTeamState,
  useNewTeamDispatch,
} from '../context/newTeam-context';
import { sign } from 'jsonwebtoken';
interface Props {}

export const CreateRoutes: React.SFC = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const [input, setInput] = useState('');

  /**
   * Context
   */
  const { team, channel } = useNewTeamState();
  const dispatch = useNewTeamDispatch();

  /**
   * Query
   */
  const { data, loading, error } = useMeQuery();
  const [createTeam] = useCreateTeamMutation();
  const [createChannel] = useCreateChannelMutation();

  return (
    <>
      <Switch>
        <Route path={match.url + '/teamname'}>
          {data?.me?.id ? (
            <CreateTeamLayout
              input={input}
              modifyInput={setInput}
              title="What's the name of your company or team?"
              inputPlaceholder='Ex. Tesla or Tesla Motors'
              requirePolicy
              opacity={0.15}
              transaction={(e) => {
                e.preventDefault();
                dispatch({ type: 'add_team', payload: input });
                setInput('');
                history.push('/create/channelname');
              }}
              authenticated={data?.me?.id}
            />
          ) : (
            <Redirect to='/get-started' />
          )}
        </Route>
        <Route path={match.url + '/channelname'}>
          {team ? (
            <CreateTeamLayout
              input={input}
              modifyInput={setInput}
              title="What's a project your team is working on?"
              inputPlaceholder='Ex. The very exciting project'
              opacity={0.8}
              team={team}
              transaction={(e) => {
                e.preventDefault();
                dispatch({ type: 'add_channel', payload: input });
                setInput('');
                history.push('/create/tada');
              }}
            />
          ) : (
            <Redirect exact to='/get-started' />
          )}
        </Route>
        <Route path={match.url + '/tada'}>
          {team && channel ? (
            <CreateTeamLayout
              input={input}
              modifyInput={setInput}
              title={`Tada! Meet your team's first channel: #${channel}`}
              description="You're leaving those unending email threads in the past. Channels give every project, topic, and team a dedicated space for all their messages and files"
              opacity={1}
              team={team}
              channel={channel}
              buttonName='See your channel in Slack'
              transaction={async (e) => {
                e.preventDefault();
                // create team query
                const { data } = await createTeam({
                  variables: { name: team },
                });
                // create channel query
                if (data?.createTeam?.id) {
                  const channelQueryResponse = await createChannel({
                    variables: {
                      name: channel,
                      teamId: data.createTeam.id,
                    },
                  });
                  history.push(`/client/${data.createTeam.id}`);
                }
              }}
            />
          ) : (
            <Redirect exact to='/get-started' />
          )}
        </Route>
      </Switch>
    </>
  );
};
