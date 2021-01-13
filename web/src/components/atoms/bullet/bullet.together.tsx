import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import * as b from "global/blocks";
import { Collaborate, ConnectCall, Share } from "assets/svg/Icons";

export const TogetherBullet: React.FC<{ type?: string }> = ({
  type = "share",
}) => {
  const theme = useContext(ThemeContext);
  const types: {
    [type: string]: { icon: JSX.Element; title: string; subtitle: string };
  } = {
    share: {
      icon: <Share width={48} height={48} fill={theme.colors.blue} />,
      title: "Share files",
      subtitle: "Keep files and the messages about them together in channels.",
    },
    connect: {
      icon: <ConnectCall width={48} height={48} fill={theme.colors.blue} />,
      title: "Connect on a call",
      subtitle:
        "If working face to face is easier, go from channel to voice or video call in a click",
    },
    collaborate: {
      icon: <Collaborate width={48} height={48} fill={theme.colors.blue} />,
      title: "Collaborate with partners",
      subtitle:
        "Work faster with external clients, vendors and more by working in a channel",
    },
  };
  return (
    <b.Box>
      <b.Box>{types[type].icon}</b.Box>
      <b.Box my={3}>
        <b.Text
          fontFamily="CircularPro-Bold"
          fontSize={18}
          color="black__light"
        >
          {types[type].title}
        </b.Text>
      </b.Box>
      <div>
        <b.Text fontSize={18} lineHeight={1.6}>
          {types[type].subtitle}
        </b.Text>
      </div>
    </b.Box>
  );
};
