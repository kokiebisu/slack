import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
/** styles */
import * as b from "global/blocks";
import { Button } from "components/atoms/button/button.component";

// Breakpoints;
import { signin } from "global/sizes";

export const SignInAuth: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box>
      <div>
        <b.Box
          backgroundColor={theme.colors.white}
          border="1px solid"
          borderColor={theme.colors.white__dark}
          borderRadius={5}
        >
          <b.Flex justifyContent="center">
            <b.Box maxWidth={330} width={1} py={2}>
              <b.Box pt={4} pb={3}>
                <b.Text
                  fontFamily="SlackLato-Bold"
                  fontSize={28}
                  textAlign="center"
                >
                  Sign in to your workspace
                </b.Text>
              </b.Box>
              <b.Box mt={2} mb={3}>
                <b.Text
                  fontSize={16}
                  fontFamily="SlackLato-Regular"
                  textAlign="center"
                >
                  Enter your workspace's Slack URL
                </b.Text>
              </b.Box>
              <b.Box>
                <b.Box width={1}>
                  <b.Flex alignItems="center" justifyContent="space-between">
                    <b.Input
                      border="1px solid"
                      borderColor={theme.colors.gray}
                      py={3}
                      px={2}
                      borderRadius={6}
                      fontSize={18}
                      textAlign="right"
                      placeholder="your-workspace-url"
                    />
                    <b.Box ml={2}>
                      <b.Text fontSize={20} fontFamily="SlackLato-Bold">
                        .slack.com
                      </b.Text>
                    </b.Box>
                  </b.Flex>
                </b.Box>
              </b.Box>
              <b.Box mt={3} mb={4}>
                <Button variant="next" block />
              </b.Box>
              <b.Box my={3}>
                <b.Text fontFamily="SlackLato-Regular">
                  Don't know your workspace URL? Find your workspace
                </b.Text>
              </b.Box>
            </b.Box>
          </b.Flex>
        </b.Box>
        <CreateWorkspaceWrapper>
          <b.Flex justifyContent="center">
            <CreateWorkspaceContainer>
              <b.Box mr={1}>
                <b.Text fontSize={15}>
                  Need to get your group started on Slack?
                </b.Text>
              </b.Box>
              <b.Box mr={2}>
                <b.Anchor
                  href="/get-started"
                  fontSize={15}
                  fontFamily="SlackLato-Black"
                  color="blue"
                >
                  Create a new workspace
                </b.Anchor>
              </b.Box>
            </CreateWorkspaceContainer>
          </b.Flex>
        </CreateWorkspaceWrapper>
      </div>
    </b.Box>
  );
};

const CreateWorkspaceWrapper = styled(b.Box)`
  margin: 16px 0;

  @media ${signin.sm} {
    margin: 32px 0;
  }
`;

const CreateWorkspaceContainer = styled(b.Flex)`
  display: block;
  text-align: center;
  @media ${signin.sm} {
    display: flex;
    text-align: left;
  }

  div {
    @media ${signin.sm} {
      margin: 0;
    }
  }

  div:first-child {
    margin-bottom: 3px;
    margin-right: 0px;

    @media ${signin.sm} {
      margin-right: 5px;
      margin-bottom: 0px;
    }
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;
