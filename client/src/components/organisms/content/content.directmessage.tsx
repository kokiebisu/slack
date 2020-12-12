import React from "react";
import { useState } from "react";

// Components
import { MessageContainer } from "components/Workspace/DirectMessage/Container";
import { MessageBox } from "components/Workspace/MessageBox";

import styled from "styled-components";
import * as b from "global/blocks";

// Styles

import { useParams } from "react-router";
import { useSendDirectMessageMutation, useUserQuery } from "generated/graphql";

export const DirectMessageContent: React.FC<{}> = () => {
  const { userId } = useParams();

  const { data, loading } = useUserQuery({
    variables: { userId },
    fetchPolicy: "cache-and-network",
  });
  const [value, setValue] = useState<any>(
    localStorage.getItem(`${userId}`)
      ? JSON.parse(localStorage.getItem(`${userId}`)!)
      : [
          {
            type: "paragraph",
            children: [{ text: "" }],
          },
        ]
  );
  const [send] = useSendDirectMessageMutation();

  const sendMessage = async (message: any) => {
    if (localStorage.getItem("teamId")) {
      await send({
        variables: {
          toId: userId,
          body: message,
        },
      });
    }
  };

  return (
    <Wrapper>
      <MessageContainer />
      <MessageBox sendMessage={sendMessage} />
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  height: calc(100vh - 65px - 37px);
  overflow-y: auto;
  position: relative;
`;
