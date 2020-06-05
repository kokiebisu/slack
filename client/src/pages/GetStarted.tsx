import * as React from 'react';
import styled from 'styled-components';

import * as b from '../styles/blocks';

// Svg
import { BoldPlus } from '../assets/svg/Plus';
import { NameLogo } from '../assets/svg/Logo';
import { Globe } from '../assets/svg';

// Image
import workspace from '../assets/img/slack-workspace.png';
import lightbulb from '../assets/img/lightbulb.png';

import { getstarted } from '../styles/sizes';

import { useHistory } from 'react-router-dom';

interface Props {}

export const GetStarted: React.FC<Props> = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <b.Container>
        <b.Box>
          <b.Flex justifyContent='center'>
            <IconWrapper className='namelogo'>
              <NameLogo />
            </IconWrapper>
          </b.Flex>
        </b.Box>
        <SelectOptionWrapper
          animate={{ y: -20, transition: { duration: 0.2 } }}
          py={4}>
          <b.Flex justifyContent='center'>
            <SelectOptionContainer>
              <b.Flex>
                <SelectOption className='left'>
                  <SelectOptionInner
                    className='left'
                    px={4}
                    py={5}
                    backgroundColor='primary'>
                    <b.Box>
                      <b.Text
                        color='white'
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
                          color='white__dark'
                          fontFamily='SlackLato-Light'>
                          Create a brand-new workspace for you and your team.
                        </b.Text>
                      </b.Box>
                    </b.Box>
                    <b.Anchor href='/get-started/create'>
                      <b.Box backgroundColor='white' borderRadius={5} py={3}>
                        <b.Flex alignItems='center' justifyContent='center'>
                          <IconWrapper className='boldplus' mr={2}>
                            <BoldPlus />
                          </IconWrapper>
                          <b.Box>
                            <b.Text
                              fontSize={19}
                              color='primary'
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
                        color='black__light'
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
                          color='black__light'
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
                              color='primary'
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
                      color='gray'>
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
      </b.Container>
      <b.Box py={4}>
        <b.Flex alignItems='center' justifyContent='center'>
          <b.Box mr={2}>
            <FooterLink href='/legal'>Privacy & terms</FooterLink>
          </b.Box>
          <b.Box mr={2}>
            <FooterLink href='/help'>Contact us</FooterLink>
          </b.Box>
          <b.Box mr={2}>
            <b.Flex>
              <IconWrapper className='globe' mr={1}>
                <Globe />
              </IconWrapper>
              <b.Box>
                <ChangeRegion>Change region</ChangeRegion>
              </b.Box>
            </b.Flex>
          </b.Box>
        </b.Flex>
      </b.Box>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  padding: 30px 0;
`;

const IconWrapper = styled(b.Box)`
  position: relative;
  &.namelogo {
    padding: 5px;
    svg {
      width: 140px;
      height: 60px;
    }
  }

  &.boldplus {
    svg {
      width: 13px;
      height: 13px;
      path {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  &.globe {
    top: 0.5px;
    svg {
      width: 12px;
      height: 12px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

const SelectOptionWrapper = styled(b.Box)``;

const SelectOptionContainer = styled(b.Box)`
  max-width: 780px;

  width: 100%;

  border-radius: 5px;

  & > div {
    display: block;

    @media ${getstarted.xs} {
      display: flex;
    }
  }
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
  width: 100%;

  @media ${getstarted.xs} {
    width: 50%;
  }

  &.right {
    border: 0.5px solid lightgray;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const SignInButton = styled(b.Box)`
  position: relative;
  bottom: 1px;
  border: 0.5px solid ${({ theme }) => theme.colors.gray__light};
  padding: 16px;
  border-radius: 5px;
`;

const WhatIsSlackWrapper = styled(b.Box)``;

const WhatIsSlackContainer = styled(b.Box)`
  width: 100%;
  max-width: 550px;
`;

const GlobeWrapper = styled(b.Box)`
  position: relative;
`;

const FooterLink = styled(b.Anchor)`
  font-size: 14px;
  font-family: 'SlackLato-Regular';
  color: ${({ theme }) => theme.colors.gray};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;

const ChangeRegion = styled(b.Button)`
  font-size: 14px;
  font-family: 'SlackLato-Regular';
  color: ${({ theme }) => theme.colors.gray__light};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;