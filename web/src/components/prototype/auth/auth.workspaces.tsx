import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

// Blocks
import * as b from "../../../global/blocks";

import { Card } from "../../molecules/card";

// Sizes
import { size } from "../../../global/sizes";

export const WorkspacesAuth: React.FC<{
  teams?: {
    id: string;
    name: string;
    avatarBackground: string;
  }[];
}> = ({
  teams = [
    { id: "channel1", name: "Channel 1", avatarBackground: "red" },
    { id: "channel2", name: "Channel 2", avatarBackground: "blue" },
  ],
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <b.Box>
        <b.Flex justifyContent="center">
          <b.Box
            width={1}
            maxWidth={570}
            border-bottom="0.5px solid"
            borderColor={theme.colors.gray__lighter}
          >
            <b.Box>
              <b.Text fontSize={24} fontFamily="SlackLato-Black">
                Your workspaces
              </b.Text>
            </b.Box>
            <b.Box my={3}>
              <b.Text
                fontSize={14}
                fontFamily="SlackLato-Regular"
                color={theme.colors.gray__light}
              >
                You're already a member of these Slack teams:
              </b.Text>
            </b.Box>
          </b.Box>
        </b.Flex>
      </b.Box>
      <b.Box>
        <b.Flex flexDirection="column" alignItems="center">
          {teams.map(({ id, name, avatarBackground }, index) => {
            return (
              <b.Box width={1} key={index}>
                <Card
                  variant="available"
                  name={name}
                  url={id}
                  extendsTo={{ maxWidth: 570 }}
                  avatarBackground={avatarBackground}
                />
              </b.Box>
            );
          })}
        </b.Flex>
      </b.Box>
      <b.Box>
        <b.Flex justifyContent="center">
          <ShowMore my={4}>
            <b.Text
              fontSize={15}
              color={theme.colors.blue}
              fontFamily="SlackLato-Regular"
            >
              Show {teams.length} more workspaces
            </b.Text>
          </ShowMore>
        </b.Flex>
      </b.Box>
      <b.Box>
        <b.Flex justifyContent="center">
          <b.Box>
            <b.Text
              fontFamily="SlackLato-Regular"
              lineHeight={1.5}
              fontSize={14}
              color={theme.colors.gray__light}
            >
              Looking for a different workspace? You can try{" "}
              <Span color={theme.colors.blue} className="anotheremail">
                another email address
              </Span>{" "}
              or ask your Workspace Administrator for an invitation.
            </b.Text>
          </b.Box>
        </b.Flex>
      </b.Box>
    </Container>
  );
};

const ShowMore = styled(b.Button)`
  & > p {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const Span = styled(b.Span)`
  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled(b.Box)`
  padding: 0 15px;
  @media ${size.sm} {
    max-width: 570px;
    width: 100%;
  }
`;
