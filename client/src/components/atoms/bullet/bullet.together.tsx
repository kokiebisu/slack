import * as React from "react";
import styled from "styled-components";
import * as b from "global/blocks";
import { Collaborate, ConnectCall, Share } from "assets/svg/Icons";

export const TogetherBullet: React.FC<{ together?: string }> = ({
  together = "share",
}) => {
  const togethers = {
    share: {
      icon: <Share width={48} />,
      title: "Share files",
      subtitle: "Keep files and the messages about them together in channels.",
    },
    connect: {
      icon: <ConnectCall width={48} />,
      title: "Connect on a call",
      subtitle:
        "If working face to face is easier, go from channel to voice or video call in a click",
    },
    collaborate: {
      icon: <Collaborate width={48} />,
      title: "Collaborate with partners",
      subtitle:
        "Work faster with external clients, vendors and more by working in a channel",
    },
  };
  return (
    <b.Box>
      <IconWrapper>{togethers[together].icon}</IconWrapper>
      <b.Box my={3}>
        <b.Text
          fontFamily="CircularPro-Bold"
          fontSize={18}
          color="black__light"
        >
          {togethers[together].title}
        </b.Text>
      </b.Box>
      <div>
        <b.Text fontSize={18} lineHeight={1.6}>
          {togethers[together].subtitle}
        </b.Text>
      </div>
    </b.Box>
  );
};

const IconWrapper = styled(b.Box)`
  path {
    fill: ${({ theme }) => theme.colors.blue};
  }
`;
