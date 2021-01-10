import React from "react";
import { useParams } from "react-router-dom";

// Blocks
import * as b from "global/blocks";

// Styles
import {
  Header,
  Description,
  Wrapper,
  Profile,
  IconWrapper,
} from "styles/Workspace/DirectMessage/MessageHeader";

// Svgs
import { UserAlt } from "assets/svg";

// Queries
import { useUserQuery } from "generated/graphql";

export const MessageHeader = () => {
  const { userId } = useParams<{ userId: string }>();
  // const { data: userData } = useUserQuery({
  //   variables: {
  //     userId,
  //   },
  // });
  return (
    <Wrapper>
      <b.Box>
        <b.Flex alignItems="center">
          <b.Box mr={2}>
            {/* {userData && userData.user.user && (
              <Profile
                backgroundColor={userData.user.user.avatarBackground}
                mr={2}
              >
                <IconWrapper className="avatar">
                  <UserAlt />
                </IconWrapper>
              </Profile>
            )} */}
          </b.Box>
          <Header>
            {/* {userData && userData.user.user && (
              <b.Text>{userData.user.user.fullname} </b.Text>
            )} */}
          </Header>
        </b.Flex>
      </b.Box>
      <Description>
        <b.Text>
          This is the very beginning of your direct message history with &nbsp;
          {/* {userData && userData.user.user && (
            <b.Span>@{userData.user.user.fullname}</b.Span>
          )} */}
        </b.Text>
      </Description>
    </Wrapper>
  );
};
