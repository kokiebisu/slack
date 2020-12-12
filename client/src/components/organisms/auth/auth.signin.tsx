import * as React from "react";
import styled from "styled-components";
/** styles */
import * as b from "global/blocks";

// Breakpoints;
import { signin } from "global/sizes";
/** vectors */
import { RightArrow } from "assets/svg";

export const SignInAuth: React.FC<{}> = () => {
  return (
    <Wrapper>
      <b.Flex flexDirection="column" alignItems="center">
        <Content>
          <b.Flex justifyContent="center">
            <ContentInner py={2}>
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
                  <b.Flex alignItems="center" justifyContent="center">
                    <WorkspaceInput placeholder="your-workspace-url" />
                    <b.Box ml={2}>
                      <b.Text fontSize={20} fontFamily="SlackLato-Bold">
                        .slack.com
                      </b.Text>
                    </b.Box>
                  </b.Flex>
                </b.Box>
              </b.Box>
              <b.Box mt={3} mb={4}>
                <b.Button width={1}>
                  <b.Box
                    borderRadius={5}
                    backgroundColor="green"
                    py={3}
                    width={1}
                  >
                    <b.Flex justifyContent="center">
                      <b.Text color="white" fontFamily="SlackLato-Bold">
                        Continue
                      </b.Text>
                      <IconWrapper>
                        <RightArrow />
                      </IconWrapper>
                    </b.Flex>
                  </b.Box>
                </b.Button>
              </b.Box>
              <b.Box my={3}>
                <b.Text fontFamily="SlackLato-Regular">
                  Don't know your workspace URL? Find your workspace
                </b.Text>
              </b.Box>
            </ContentInner>
          </b.Flex>
        </Content>
        <CreateWorkspaceWrapper>
          <CreateWorkspaceContainer>
            <b.Box mr={1}>
              <b.Text fontSize={15}>
                Need to get your group started on Slack?
              </b.Text>
            </b.Box>
            <b.Box>
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
        </CreateWorkspaceWrapper>
      </b.Flex>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  width: fit-content;
`;

const Content = styled(b.Box)`
  width: 100%;
  max-width: 620px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.white__dark};
  border-radius: 5px;
`;

const ContentInner = styled(b.Box)`
  max-width: 330px;
  width: 100%;
`;

const WorkspaceInput = styled.input`
  border-radius: 4px;
  border: 1px solid gray;
  padding: 10px 5px;
  text-align: right;
  font-size: 18px;
`;

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
    margin-top: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const IconWrapper = styled(b.Box)`
  margin-left: 10px;
  svg {
    width: 13px;
    height: 13px;
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;
