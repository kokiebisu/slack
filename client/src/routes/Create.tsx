import * as React from 'react';
import { useState } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { CreateTeamLayout } from '../components/CreateTeam/layout';
import {
  useMeQuery,
  useCreateTeamMutation,
  useCreateChannelMutation,
} from '../generated/graphql';
import { useClientDispatch, useClientState } from '../context/client-context';
import { randomColor } from '../util/randomColor';
import { avatar } from '../styles/colors';
import { ConfirmDigit } from '../pages/ConfirmDigit';

interface Props {}

export const CreateRoutes: React.SFC = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const [input, setInput] = useState('');
  const location: any = useLocation();

  const avatarBackground = randomColor(avatar);

  /**
   * Context
   */
  const { team, channel } = useClientState();
  const dispatchClient = useClientDispatch();

  /**
   * Query
   */
  const { data: { me } = {} } = useMeQuery();

  const [createTeam] = useCreateTeamMutation();
  const [createChannel] = useCreateChannelMutation();

  return (
    <>
      <Switch>
        <Route path={match.url + '/verifyemail'}>
          <ConfirmDigit />
        </Route>
        <Route path={match.url + '/teamname'}>
          {location.state! && location.state!.authenticated !== undefined ? (
            <CreateTeamLayout
              input={input}
              modifyInput={setInput}
              title="What's the name of your company or team?"
              inputPlaceholder='Ex. Tesla or Tesla Motors'
              requirePolicy
              opacity={0.15}
              transaction={(e) => {
                e.preventDefault();
                dispatchClient({ type: 'add_team', payload: input });
                setInput('');
                history.push('/create/channelname');
              }}
              authenticated={me?.ok}
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
                dispatchClient({ type: 'add_channel', payload: input });
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
                const { data } = await createTeam({
                  variables: {
                    name: team,
                    avatarBackground,
                  },
                });

                if (data && data?.createTeam?.team!.id) {
                  dispatchClient({
                    type: 'add_teamid',
                    payload: data.createTeam.team.id,
                  });

                  await createChannel({
                    variables: {
                      name: 'general',
                      teamId: data.createTeam.team.id,
                    },
                  });

                  await createChannel({
                    variables: {
                      name: 'random',
                      teamId: data.createTeam.team.id,
                    },
                  });

                  await createChannel({
                    variables: {
                      name: channel,
                      teamId: data.createTeam.team.id,
                    },
                  });

                  history.push(`/client/${data.createTeam.team.id}`);
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
