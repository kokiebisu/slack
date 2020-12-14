import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

// Blocks
import * as b from "global/blocks";

import { UserAlt } from "assets/svg";

export const MessageCard: React.FC<{
  sender?: string;
  avatar?: string;
  time?: string;
  body?: {
    type: string;
    message?: string;
  };
}> = ({
  sender = "Ken",
  avatar = "green",
  time = "12, 12",
  body = {
    type: "message",
    message: "Hello",
  },
}) => {
  const theme = useContext(ThemeContext);
  const status = {
    joined: (
      <b.Box>
        <b.Text
          fontSize={15}
          fontFamily="SlackLato-Regular"
          color={theme.colors.gray__light}
        >
          joined #general
        </b.Text>
      </b.Box>
    ),
    message: (
      <b.Box breakall dangerouslySetInnerHTML={{ __html: body?.message! }} />
    ),
  };
  return (
    <b.Box mb={3}>
      <b.Flex>
        <b.Box mr={2}>
          <b.Box
            width={36}
            height={36}
            borderRadius={5}
            backgroundColor={avatar}
            mr={2}
          >
            <IconWrapper
              position="absolute"
              bottom={-4}
              left="50%"
              className="avatar"
            >
              <UserAlt width={30} height={30} fill={theme.colors.white} />
            </IconWrapper>
          </b.Box>
        </b.Box>
        <b.Box>
          <b.Box>
            <b.Flex alignItems="center">
              <b.Box mr={2}>
                <b.Text breakall fontSize={15} fontFamily="SlackLato-Black">
                  {sender}
                </b.Text>
              </b.Box>
              <b.Box font-size={12} font-family="SlackLato-Light">
                <b.Text breakall>{time?.split(",")[2]}</b.Text>
              </b.Box>
            </b.Flex>
          </b.Box>
          {body && status[body.type!]}
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};

const IconWrapper = styled(b.Box)`
  transform: translateX(-50%);
`;
