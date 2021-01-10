import * as React from "react";
import { useState } from "react";
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom";

import { Prototype } from "components/prototype/create";

import { Page } from "pages";

import { randomColor } from "util/randomColor";
import { avatar } from "global/colors";

export const CreateRoutes: React.SFC = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const [input, setInput] = useState("");
  const location: any = useLocation();

  const avatarBackground = randomColor(avatar);
  const [info, setInfo] = useState({
    team: "",
    channel: "",
  });

  return (
    <>
      <Switch>
        <Route path={match.url + "/verifyemail"}>
          <Page variant="confirmdigit" />
        </Route>
        <Route path={match.url + "/teamname"}>
          {/* {location.state! && location.state!.authenticated !== undefined ? (
            <Prototype
              variant="create"
              input={input}
              modifyInput={setInput}
              title="What's the name of your company or team?"
              inputPlaceholder="Ex. Tesla or Tesla Motors"
              requirePolicy
              opacity={0.15}
              transaction={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                setInfo({ ...info, team: input });
                setInput("");
                history.push("/create/channelname");
              }}
              authenticated={me?.ok}
            />
          ) : (
            <Redirect to="/get-started" />
          )} */}
        </Route>
        <Route path={match.url + "/channelname"}>
          {/* {info.team ? (
            <Prototype
              variant="create"
              input={input}
              modifyInput={setInput}
              title="What's a project your team is working on?"
              inputPlaceholder="Ex. The very exciting project"
              opacity={0.8}
              team={info.team}
              transaction={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                setInfo({ ...info, channel: input });
                setInput("");
                history.push("/create/tada");
              }}
            />
          ) : (
            <Redirect exact to="/get-started" />
          )} */}
        </Route>
        <Route path={match.url + "/tada"}>
          {/* {info.team && info.channel ? (
            <Prototype
              variant="create"
              input={input}
              modifyInput={setInput}
              title={`Tada! Meet your team's first channel: #${info.channel}`}
              description="You're leaving those unending email threads in the past. Channels give every project, topic, and team a dedicated space for all their messages and files"
              opacity={1}
              team={info.team}
              channel={info.channel}
              buttonName="See your channel in Slack"
              transaction={async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                // const { data } = await createTeam({
                //   variables: {
                //     name: info.team,
                //     avatarBackground,
                //   },
                // });

                if (data && data?.createTeam?.team!.id) {
                  // await createChannel({
                  //   variables: {
                  //     name: "general",
                  //     teamId: data.createTeam.team.id,
                  //     description:
                  //       "This channel is for workspace-wide communication and announcements. All members are in this channel.",
                  //     isPublic: true,
                  //     topic:
                  //       "Company-wide announcements and work-based matters",
                  //   },
                  // });

                  // await createChannel({
                  //   variables: {
                  //     name: "random",
                  //     teamId: data.createTeam.team.id,
                  //     description:
                  //       "A place for non-work-related flimflam, faffing, hodge-podge or jibber-jabber you'd prefer to keep out of more focused work-related channels.",
                  //     isPublic: true,
                  //     topic: "Non-work banter and water cooler conversation",
                  //   },
                  // });

                  // await createChannel({
                  //   variables: {
                  //     name: info.channel,
                  //     teamId: data.createTeam.team.id,
                  //     isPublic: true,
                  //   },
                  // });

                  history.push(`/client/${data.createTeam.team.id}`);
                }
              }}
            />
          ) : (
            <Redirect exact to="/get-started" />
          )} */}
        </Route>
      </Switch>
    </>
  );
};
