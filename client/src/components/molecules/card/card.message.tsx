import * as React from "react";
import styled from "styled-components";

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
}> = ({ sender, avatar, time, body }) => {
  const status = {
    joined: (
      <Wrapper>
        <b.Text>joined #general</b.Text>
      </Wrapper>
    ),
    message: <Content dangerouslySetInnerHTML={{ __html: body?.message! }} />,
  };
  return (
    <b.Box mb={3}>
      <b.Flex>
        <b.Box mr={2}>
          <Profile backgroundColor={avatar} mr={2}>
            <IconWrapper className="avatar">
              <UserAlt />
            </IconWrapper>
          </Profile>
        </b.Box>
        <b.Box>
          <Top>
            <b.Flex alignItems="center">
              <b.Box className="sender_name" mr={2}>
                <b.Text>{sender}</b.Text>
              </b.Box>
              <b.Box className="sent_time">
                <b.Text>{time?.split(",")[2]}</b.Text>
              </b.Box>
            </b.Flex>
          </Top>
          {body && status[body.type!]}
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};

const Content = styled(b.Box)`
  word-break: break-all;
`;

const Wrapper = styled(b.Box)`
  & p {
    font-size: 15px;
    font-family: "SlackLato-Regular";
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;

const Profile = styled(b.Box)`
  position: relative;

  width: 36px;
  height: 36px;
  border-radius: 5px;
`;

const IconWrapper = styled(b.Box)`
  &.avatar {
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    & > svg {
      width: 30px;
      height: 30px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

const Top = styled(b.Box)`
  & div {
    &.sender_name {
      font-size: 15px;
      font-family: "SlackLato-Black";
    }

    &.sent_time {
      font-size: 12px;
      font-family: "SlackLato-Light";
    }
  }

  & p {
    word-break: break-all;
  }
`;
