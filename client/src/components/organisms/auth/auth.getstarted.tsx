import React from "react";
import styled from "styled-components";
import * as b from "global/blocks";
import {
  SelectOptionWrapper,
  SelectOptionContainer,
  SelectOptionInner,
  SelectOption,
  SignInButton,
  WhatIsSlackWrapper,
  WhatIsSlackContainer,
  Image,
  IconWrapper,
} from "styles/GetStarted";

// Svg
import { BoldPlus } from "assets/svg";

// Image
import workspace from "assets/img/slack-workspace.png";
import lightbulb from "assets/img/lightbulb.png";

export const GetStartedAuth: React.FC<{}> = () => {
  return (
    <Wrapper>
      <SelectOptionWrapper
        animate={{ y: -20, transition: { duration: 0.2 } }}
        py={4}
      >
        <b.Flex justifyContent="center">
          <SelectOptionContainer>
            <b.Flex>
              <SelectOption className="left">
                <SelectOptionInner
                  className="left"
                  px={4}
                  py={5}
                  backgroundColor="primary"
                >
                  <b.Box>
                    <b.Text
                      color="white"
                      fontFamily="SlackLato-Black"
                      fontSize={32}
                    >
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
                  <b.Anchor href="/get-started/create">
                    <b.Box backgroundColor="white" borderRadius={5} py={3}>
                      <b.Flex alignItems="center" justifyContent="center">
                        <IconWrapper className="boldplus" mr={2}>
                          <BoldPlus />
                        </IconWrapper>
                        <b.Box>
                          <b.Text
                            fontSize={19}
                            color="primary"
                            fontFamily="SlackLato-Bold"
                          >
                            Create a Slack workspace
                          </b.Text>
                        </b.Box>
                      </b.Flex>
                    </b.Box>
                  </b.Anchor>
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
                  <b.Anchor href="/get-started/find">
                    <SignInButton>
                      <b.Flex justifyContent="center">
                        <b.Box>
                          <b.Text
                            fontSize={19}
                            color="primary"
                            fontFamily="SlackLato-Bold"
                          >
                            Sign in to Slack
                          </b.Text>
                        </b.Box>
                      </b.Flex>
                    </SignInButton>
                  </b.Anchor>
                </SelectOptionInner>
              </SelectOption>
            </b.Flex>
          </SelectOptionContainer>
        </b.Flex>
      </SelectOptionWrapper>
      <WhatIsSlackWrapper>
        <b.Flex justifyContent="center">
          <WhatIsSlackContainer py={4}>
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
                    It’s where all their conversations and files are kept, and
                    it can only be joined by invitation.
                  </b.Text>
                </b.Box>
              </b.Box>
              <Image className="workspace">
                <img src={workspace} alt="workspace" />
              </Image>
            </b.Flex>
          </WhatIsSlackContainer>
        </b.Flex>
      </WhatIsSlackWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  width: fit-content;
`;
