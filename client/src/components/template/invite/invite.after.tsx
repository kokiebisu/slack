import React from "react";
import * as b from "global/blocks";

import styled from "styled-components";

// Svg
import { PaperPlaneLight } from "assets/svg";

interface Props {
  input: { email: string; name: string; done: boolean };
  dispatchToggle: any;
}

export const AfterInvite: React.FC<Props> = ({ input, dispatchToggle }) => {
  return (
    <>
      <Header>
        <b.Flex justifyContent="space-between">
          <Title>
            <b.Text>Invites sent</b.Text>
          </Title>
        </b.Flex>
      </Header>
      <Description>
        <b.Text>
          You've invited <span>1 Member</span> to your workspace
        </b.Text>
      </Description>
      <Content>
        <ContentHeader>
          <b.Flex>
            <b.Box className="content__section">
              <b.Text>Email Address</b.Text>
            </b.Box>
            <b.Box className="content__section">
              <b.Text>Name</b.Text>
            </b.Box>
          </b.Flex>
        </ContentHeader>
        <Line />
        <b.Box my={2} width={1}>
          <b.Flex>
            <b.Box width={1 / 2}>
              <b.Text fontSize={14}>{input.name}</b.Text>
            </b.Box>
            <b.Box width={1 / 2}>
              <b.Text fontSize={14}>{input.name}</b.Text>
            </b.Box>
          </b.Flex>
        </b.Box>
      </Content>
      <Footer>
        <b.Flex alignItems="center" justifyContent="space-between">
          <b.Box>
            <b.Flex>
              <IconWrapper className="paper-plane" mr={2}>
                <PaperPlaneLight />
              </IconWrapper>
              <b.Box>
                <b.Text>See past invites</b.Text>
              </b.Box>
            </b.Flex>
          </b.Box>
          <SendButton
            onClick={() => {
              dispatchToggle({ type: "toggle_invite" });
            }}
          >
            Done
          </SendButton>
        </b.Flex>
      </Footer>
    </>
  );
};

const Header = styled(b.Box)`
  margin-bottom: 20px;
`;

const Title = styled(b.Box)`
  & > p {
    font-family: "SlackLato-Black";
    font-size: 18px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const IconWrapper = styled(b.Box)`
  &.user-plus {
    & svg {
      width: 20px;
      height: 20px;
      path {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  &.plus-circle {
    & svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.blue__light};
      }
    }
  }

  &.google {
    & svg {
      width: 18px;
      height: 18px;
    }
  }

  &.paper-plane {
    & svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }
`;

const IconButtonWrapper = styled(b.Button)`
  position: relative;
  &.close {
    width: 35px;
    height: 35px;
    svg {
      position: relative;
      top: 2px;
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.black};
      }
    }
    &:hover {
      border-radius: 100%;
      background-color: ${({ theme }) => theme.colors.white__dark};
    }
  }
  &.info {
    top: 1.5px;
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }
`;

const Footer = styled(b.Box)`
  margin-top: 60px;

  & p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;

const SendButton = styled(b.Button)`
  background-color: ${({ theme }) => theme.colors.green};
  padding: 8px 18px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  font-family: "SlackLato-Bold";
  font-size: 14px;
`;

const Description = styled(b.Box)`
  & > p {
    font-family: "SlackLato-Regular";
    font-size: 14px;

    & > span {
      font-family: "SlackLato-Bold";
    }
  }
`;
const Content = styled(b.Box)``;

const ContentHeader = styled(b.Box)`
  margin: 20px 0 6px 0;
  & p {
    font-size: 14px;
    font-family: "SlackLato-Bold";
  }

  & div {
    &.content__section {
      width: 50%;
    }
  }
`;

const Line = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.green};
  width: 100%;
  height: 2px;
`;
