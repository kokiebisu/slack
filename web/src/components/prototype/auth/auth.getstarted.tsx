import React from "react";
import styled from "styled-components";
import * as b from "../../../global/blocks";

import { getstarted, size } from "../../../global/sizes";

import { Button } from "../../atoms/button";

// Image
import workspace from "../../../assets/img/slack-workspace.png";
import lightbulb from "../../../assets/img/lightbulb.png";

export const GetStartedAuth: React.FC<{}> = () => {
  return (
    <div>
      <Container>
        <SelectOption className="left">
          <SelectOptionInner
            className="left"
            px={4}
            py={5}
            backgroundColor="primary"
          >
            <b.Box>
              <b.Text color="white" fontFamily="SlackLato-Black" fontSize={32}>
                Try Slack with your team, for free
              </b.Text>
            </b.Box>
            <b.Box my={3} mb={4}>
              <b.Box mt={1} mb={2}>
                <b.Text
                  lineHeight={1.4}
                  fontSize={18}
                  color="white__dark"
                  fontFamily="SlackLato-Light"
                >
                  Create a brand-new workspace for you and your team.
                </b.Text>
              </b.Box>
            </b.Box>
            <b.Box>
              <Button variant="getstarted" type="signup" block />
            </b.Box>
          </SelectOptionInner>
        </SelectOption>
        <SelectOption className="right">
          <SelectOptionInner className="right" px={4} py={5}>
            <b.Box>
              <b.Text
                color="black__light"
                fontFamily="SlackLato-Black"
                fontSize={32}
              >
                Is your team already using Slack?
              </b.Text>
            </b.Box>
            <b.Box my={3} mb={4}>
              <b.Box mt={1} mb={2}>
                <b.Text
                  lineHeight={1.4}
                  fontSize={18}
                  color="black__light"
                  fontFamily="SlackLato-Regular"
                >
                  Find and sign in to your team's existing workspace.
                </b.Text>
              </b.Box>
            </b.Box>
            <b.Box>
              <Button variant="getstarted" type="signin" block />
            </b.Box>
          </SelectOptionInner>
        </SelectOption>
      </Container>

      <Container justifyContent="center">
        <b.Box maxWidth={550} width={1} py={4}>
          <b.Flex justifyContent="center" alignItems="center">
            <b.Box>
              <b.Box>
                <b.Flex>
                  <Image mr={2}>
                    <img src={lightbulb} alt="lightbulb" />
                  </Image>
                  <b.Box>
                    <b.Text fontFamily="SlackLato-Bold" fontSize={17}>
                      What's a Slack workspace?
                    </b.Text>
                  </b.Box>
                </b.Flex>
              </b.Box>
              <b.Box mt={3} pr={2}>
                <b.Text
                  lineHeight={1.5}
                  fontFamily="SlackLato-Regular"
                  fontSize={14}
                  color="gray"
                >
                  Each company that uses Slack has a workspace of their own.
                  It’s where all their conversations and files are kept, and it
                  can only be joined by invitation.
                </b.Text>
              </b.Box>
            </b.Box>
            <Image>
              <img src={workspace} alt="workspace" />
            </Image>
          </b.Flex>
        </b.Box>
      </Container>
    </div>
  );
};

const Container = styled(b.Flex)`
  display: block;

  @media ${getstarted.xs} {
    display: flex;
  }
`;

const SelectOptionInner = styled(b.Box)`
  height: 100%;

  &.left {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &.right {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  @media ${size.xs} {
    &.left {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border-top-right-radius: 0px;
    }

    &.right {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 0px;
    }
  }
`;

const SelectOption = styled(b.Box)`
  width: 100%;

  &.right {
    border: 0.5px solid lightgray;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  @media ${size.xs} {
    width: 50%;

    &.right {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 0px;
    }
  }
`;

const Image = styled(b.Box)`
  display: none;
  @media ${size.sm} {
    display: block;
  }
`;
