import {
  DirectMessageBackground,
  LightBulbWithBackground,
  SmileWithBackground,
  SpeakerBackground,
} from "assets/svg";
import * as b from "global/blocks";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

export const ClientMessage: React.FC<{ type?: string; channel?: string }> = ({
  type = "channel",
  channel = "NewChannel",
}) => {
  const theme = useContext(ThemeContext);
  const types: {
    [type: string]: { icon: JSX.Element; title: string; subtitle: string };
  } = {
    channel: {
      icon: <LightBulbWithBackground width={35} height={35} />,
      title: `This is the very beginning of the #${channel} channel`,
      subtitle:
        "This channel is for working on a project. Hold meetings, share docs, and make decisions together with your team.",
    },
    random: {
      icon: <SmileWithBackground width={35} height={35} />,
      title: "You've found the #random channel",
      subtitle:
        "This channel is for... well, everything else. It's a place for team jokes, spur-of-the-moment ideas, and funny GIFs. Go wild!",
    },
    general: {
      icon: <SpeakerBackground width={35} height={35} />,
      title: "You're looking at the #general channel",
      subtitle:
        "This is the one channel that will always include everyone. It’s a great spot for announcements and team-wide conversations.",
    },
    directMessage: {
      icon: <DirectMessageBackground width={35} height={35} />,
      title: "This spaace is just for you",
      subtitle:
        "Message yourself? Why not! Think of this as a scratchpad — a place for jotting down a note or drawing up a to-do list.",
    },
  };
  return (
    <b.Box>
      <b.Flex>
        <b.Box mr={2} borderRadius={8}>
          {types[type].icon}
        </b.Box>
        <b.Box>
          <b.Box>
            <b.Text fontSize={14} fontFamily="SlackLato-Bold">
              {types[type].title}
            </b.Text>
          </b.Box>
          <b.Box>
            <b.Text
              fontSize={14}
              fontFamily="SlackLato-Regular"
              color={theme.colors.gray}
            >
              {types[type].subtitle} <b.Span>Edit description</b.Span>
            </b.Text>
          </b.Box>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};
