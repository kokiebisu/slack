import * as React from "react";
import styled from "styled-components";

// Blocks
import * as b from "global/blocks";

import { Card } from "components/molecules/card/card.component";

// Sizes
import { size } from "global/sizes";

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
  return (
    <Container>
      <b.Box>
        <b.Flex justifyContent="center">
          <Header>
            <Title>
              <b.Text>Your workspaces</b.Text>
            </Title>
            <Description my={3}>
              <b.Text>You're already a member of these Slack teams:</b.Text>
            </Description>
          </Header>
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
            <b.Text>Show {teams.length} more workspaces</b.Text>
          </ShowMore>
        </b.Flex>
      </b.Box>
      <b.Box>
        <b.Flex justifyContent="center">
          <NotFound>
            <b.Text>
              Looking for a different workspace? You can try{" "}
              <span className="anotheremail">another email address</span> or ask
              your Workspace Administrator for an invitation.
            </b.Text>
          </NotFound>
        </b.Flex>
      </b.Box>
    </Container>
  );
};

const ShowMore = styled(b.Button)`
  & > p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.blue};
    font-family: "SlackLato-Regular";

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const NotFound = styled(b.Box)`
  & > p {
    font-family: "SlackLato-Regular";
    line-height: 1.5;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray__light};
    & > span {
      color: ${({ theme }) => theme.colors.blue};
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Container = styled(b.Box)`
  padding: 0 15px;
  @media ${size.sm} {
    max-width: 570px;
    width: 100%;
  }
`;

const Header = styled(b.Box)`
  width: 100%;
  max-width: 570px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray__lighter};
`;

const Title = styled(b.Box)`
  & > p {
    font-size: 24px;
    font-family: "SlackLato-Black";
  }
`;

const Description = styled(b.Box)`
  & > p {
    font-size: 14px;
    font-family: "SlackLato-Regular";
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;

const Top = styled(b.Box)`
  border-bottom: 2px solid red;
  max-width: 500px;
  background-color: red;
`;
