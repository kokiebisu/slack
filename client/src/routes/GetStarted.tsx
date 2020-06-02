import * as React from 'react';
import styled from 'styled-components';

import * as b from '../styles/blocks';

// Svg
import { BoldPlus } from '../assets/svg/Shared';

// Image
import workspace from '../assets/img/slack-workspace.png';
import lightbulb from '../assets/img/lightbulb.png';
import { LogoCenterHeader } from '../components/shared/LogoCenter/layout';

interface Props {}

export const GetStarted: React.FC<Props> = () => {
  return (
    <LogoCenterHeader>
      <SelectOptionWrapper animate={{ y: -4 }} py={4}>
        <b.Flex justifyContent='center'>
          <SelectOptionContainer>
            <b.Flex>
              <SelectOption className='left'>
                <SelectOptionInner
                  className='left'
                  px={4}
                  py={5}
                  backgroundColor='#4A154B'>
                  <b.Box>
                    <b.Text
                      color='#FFFFFF'
                      fontFamily='SlackLato-Black'
                      fontSize={32}>
                      Try Slack with your team, for free
                    </b.Text>
                  </b.Box>
                  <b.Box my={3} mb={4}>
                    <b.Box mt={1} mb={2}>
                      <b.Text
                        lineHeight={1.4}
                        fontSize={18}
                        color='#EDE9EE'
                        fontFamily='SlackLato-Light'>
                        Create a brand-new workspace for you and your team.
                      </b.Text>
                    </b.Box>
                  </b.Box>
                  <b.Anchor href='/get-started/create'>
                    <b.Box backgroundColor='white' borderRadius={5} py={3}>
                      <b.Flex alignItems='center' justifyContent='center'>
                        <b.Box mr={2}>
                          <BoldPlus width={13} height={13} color='#4A154B' />
                        </b.Box>
                        <b.Box>
                          <b.Text
                            fontSize={19}
                            color='#4A154B'
                            fontFamily='SlackLato-Bold'>
                            Create a Slack workspace
                          </b.Text>
                        </b.Box>
                      </b.Flex>
                    </b.Box>
                  </b.Anchor>
                </SelectOptionInner>
              </SelectOption>
              <SelectOption className='right'>
                <SelectOptionInner className='right' px={4} py={5}>
                  <b.Box>
                    <b.Text
                      color='#1D1C1D'
                      fontFamily='SlackLato-Black'
                      fontSize={32}>
                      Is your team already using Slack?
                    </b.Text>
                  </b.Box>
                  <b.Box my={3} mb={4}>
                    <b.Box mt={1} mb={2}>
                      <b.Text
                        lineHeight={1.4}
                        fontSize={18}
                        color='#1D1C1D'
                        fontFamily='SlackLato-Regular'>
                        Find and sign in to your team's existing workspace.
                      </b.Text>
                    </b.Box>
                  </b.Box>
                  <b.Anchor href='/get-started/find'>
                    <SignInButton>
                      <b.Flex justifyContent='center'>
                        <b.Box>
                          <b.Text
                            fontSize={19}
                            color='#4A154B'
                            fontFamily='SlackLato-Bold'>
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
        <b.Flex justifyContent='center'>
          <WhatIsSlackContainer py={4}>
            <b.Flex justifyContent='center' alignItems='center'>
              <b.Box>
                <b.Box>
                  <b.Flex>
                    <b.Box mr={2}>
                      <img src={lightbulb} />
                    </b.Box>
                    <b.Box>
                      <b.Text fontFamily='SlackLato-Bold' fontSize={17}>
                        What's a Slack workspace?
                      </b.Text>
                    </b.Box>
                  </b.Flex>
                </b.Box>
                <b.Box mt={3} pr={2}>
                  <b.Text
                    lineHeight={1.5}
                    fontFamily='SlackLato-Regular'
                    fontSize={14}
                    color='#939393'>
                    Each company that uses Slack has a workspace of their own.
                    It’s where all their conversations and files are kept, and
                    it can only be joined by invitation.
                  </b.Text>
                </b.Box>
              </b.Box>
              <b.Box>
                <img src={workspace} />
              </b.Box>
            </b.Flex>
          </WhatIsSlackContainer>
        </b.Flex>
      </WhatIsSlackWrapper>
    </LogoCenterHeader>
  );
};

const Wrapper = styled(b.Box)`
  height: 100vh;
  padding: 30px 0;
`;

const SelectOptionWrapper = styled(b.Box)``;

const SelectOptionContainer = styled(b.Box)`
  max-width: 780px;

  width: 100%;

  border-radius: 5px;
`;

const SelectOptionInner = styled(b.Box)`
  height: 100%;
  &.left {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &.right {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const SelectOption = styled(b.Box)`
  width: 50%;

  &.right {
    border: 0.5px solid lightgray;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const SignInButton = styled(b.Box)`
  position: relative;
  bottom: 1px;
  border: 0.5px solid lightgray;
  padding: 16px;
  border-radius: 5px;
`;

const WhatIsSlackWrapper = styled(b.Box)``;

const WhatIsSlackContainer = styled(b.Box)`
  width: 100%;
  max-width: 550px;
`;
