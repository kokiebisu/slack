import * as React from "react";
import styled from "styled-components";

// Blocks
import * as b from "global/blocks";

// Styles
import { Profile, IconWrapper, Top } from "styles/Workspace/Content/Message";

import { UserAlt } from "assets/svg";

interface Body {
  type: string;
  message?: string;
}

export const Message: React.FC<{
  sender: string;
  avatar: string;
  time: string;
  body: Body;
}> = ({ sender, avatar, time, body }) => {
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
                <b.Text>{time.split(",")[2]}</b.Text>
              </b.Box>
            </b.Flex>
          </Top>
          {renderBody(body)}
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};

const renderBody = (body: Body) => {
  switch (body.type) {
    case "joined":
      return (
        <Wrapper>
          <b.Text>joined #general</b.Text>
        </Wrapper>
      );
    case "message":
      return <Content dangerouslySetInnerHTML={{ __html: body.message! }} />;
    default:
      return;
  }
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
