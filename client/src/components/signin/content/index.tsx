import * as React from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../../styles/blocks';

// Sizes
import { signin } from '../../../styles/sizes';
import { RightArrow } from '../../../assets/svg/Arrows';

// Styles
import {
  Content,
  ContentInner,
  WorkspaceInput,
  CreateWorkspaceWrapper,
  CreateWorkspaceContainer,
  IconWrapper,
} from './index.styles';

interface Props {}

export const SignInContent: React.FC<Props> = () => {
  return (
    <b.Box backgroundColor='white__dark'>
      <b.Box py={5}>
        <b.Container>
          <b.Flex flexDirection='column' alignItems='center'>
            <Content>
              <b.Flex justifyContent='center'>
                <ContentInner py={2}>
                  <b.Box pt={4} pb={3}>
                    <b.Text
                      fontFamily='SlackLato-Bold'
                      fontSize={28}
                      textAlign='center'>
                      Sign in to your workspace
                    </b.Text>
                  </b.Box>
                  <b.Box mt={2} mb={3}>
                    <b.Text
                      fontSize={16}
                      fontFamily='SlackLato-Regular'
                      textAlign='center'>
                      Enter your workspace's Slack URL
                    </b.Text>
                  </b.Box>
                  <b.Box>
                    <b.Box width={1}>
                      <b.Flex alignItems='center' justifyContent='center'>
                        <WorkspaceInput placeholder='your-workspace-url' />
                        <b.Box ml={2}>
                          <b.Text fontSize={20} fontFamily='SlackLato-Bold'>
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
                        backgroundColor='green'
                        py={3}
                        width={1}>
                        <b.Flex justifyContent='center'>
                          <b.Text color='white' fontFamily='SlackLato-Bold'>
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
                    <b.Text fontFamily='SlackLato-Regular'>
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
                    href='/get-started'
                    fontSize={15}
                    fontFamily='SlackLato-Black'
                    color='blue'>
                    Create a new workspace
                  </b.Anchor>
                </b.Box>
              </CreateWorkspaceContainer>
            </CreateWorkspaceWrapper>
          </b.Flex>
        </b.Container>
      </b.Box>
    </b.Box>
  );
};
