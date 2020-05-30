import React from 'react';
import styled from 'styled-components';

import * as b from '../../styles/blocks';

import { SignInHeart } from '../../assets/svg/Hearts';
import { SignInFooterLogo } from '../../assets/svg/Logo';
import { TwitterLogo, YoutubeLogo } from '../../assets/svg/SocialMedia';

import { signin } from '../../styles/sizes';

export const SignInFooter = () => {
  return (
    <Wrapper>
      <b.Box borderTop='1px solid' borderColor='#ddd'>
        <b.Flex justifyContent='center'>
          <TopContainer>
            <b.Box px={3}>
              <ListWrapper>
                <ListContainer>
                  <SectionNameWrapper>
                    <SectionName color='#de4e2b'>Using Slack</SectionName>
                  </SectionNameWrapper>
                  <List>
                    <Item>
                      <b.Box pb={1}>Product</b.Box>
                    </Item>
                    <Item>
                      <b.Box py={1}>Enterprise</b.Box>
                    </Item>
                    <Item>
                      <b.Box py={1}>Pricing</b.Box>
                    </Item>
                    <Item>
                      <b.Box py={1}>Customer Stories</b.Box>
                    </Item>
                    <Item>
                      <b.Box py={1}>Pricing</b.Box>
                    </Item>
                    <Item>
                      <b.Box py={1}>Slack Demo</b.Box>
                    </Item>
                  </List>
                </ListContainer>
                <ListContainer>
                  <SectionNameWrapper>
                    <SectionWrapper alignItems='center'>
                      <SectionName color='#e32072'>Slack</SectionName>
                      <HeartIconWrapper>
                        <b.Box ml={1}>
                          <SignInHeart width={10} height={10} color='#e32072' />
                        </b.Box>
                      </HeartIconWrapper>
                    </SectionWrapper>
                  </SectionNameWrapper>
                  <List>
                    <Item>
                      <b.Box pb={1}>Jobs</b.Box>
                    </Item>
                    <Item>
                      <b.Box py={1}>Customers</b.Box>
                    </Item>
                    <Item>
                      <b.Box py={1}>Developers</b.Box>
                    </Item>
                    <Item>
                      <b.Box py={1}>Events</b.Box>
                    </Item>
                    <Item>
                      <b.Box py={1}>Blog</b.Box>
                    </Item>
                  </List>
                </ListContainer>
                <ListContainer>
                  <SectionNameWrapper>
                    <SectionName color='#007a5a'>Legal</SectionName>
                  </SectionNameWrapper>
                  <List>
                    <Item>
                      <b.Box pb={1}>Privacy</b.Box>
                    </Item>
                    <Item>
                      <b.Box py={1}>Security</b.Box>
                    </Item>
                    <Item>
                      <b.Box py={1}>Terms of Service</b.Box>
                    </Item>
                    <Item>
                      <b.Box py={1}>Policies</b.Box>
                    </Item>
                  </List>
                </ListContainer>
                <ListContainer>
                  <SectionNameWrapper>
                    <SectionWrapper>
                      <SectionName color='#4b6bc6'>Handy Links</SectionName>
                    </SectionWrapper>
                  </SectionNameWrapper>
                  <List>
                    <Item>
                      <b.Box pb={1}>Download desktop app</b.Box>
                    </Item>
                    <Item>
                      <b.Box py={1}>Download mobile app</b.Box>
                    </Item>
                    <Item>
                      <b.Box py={1}>Brand Guidelines</b.Box>
                    </Item>
                    <Item>
                      <b.Box py={1}>Slack at Work</b.Box>
                    </Item>
                    <Item>
                      <b.Box py={1}>Status</b.Box>
                    </Item>
                  </List>
                </ListContainer>
              </ListWrapper>
            </b.Box>
          </TopContainer>
        </b.Flex>
      </b.Box>
      <b.Box backgroundColor='#F4F4F4' py={3}>
        <b.Flex justifyContent='center'>
          <BottomContainer>
            <b.Box px={3}>
              <b.Flex justifyContent='space-between'>
                <b.Box>
                  <SignInFooterLogo width={20} height={20} color='#868686' />
                </b.Box>
                <b.Box>
                  <b.Flex alignItems='center'>
                    <ContactWrapper mx={2}>
                      <b.Text fontSize={13} fontFamily='SlackLato-Regular'>
                        Contact us
                      </b.Text>
                    </ContactWrapper>
                    <LogoWrapper mx={2} className='twitter'>
                      <TwitterLogo width={20} height={20} color='#868686' />
                    </LogoWrapper>
                    <LogoWrapper mx={2} className='youtube'>
                      <YoutubeLogo width={20} height={20} color='#868686' />
                    </LogoWrapper>
                  </b.Flex>
                </b.Box>
              </b.Flex>
            </b.Box>
          </BottomContainer>
        </b.Flex>
      </b.Box>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const TopContainer = styled(b.Box)`
  width: 100%;
  padding: 0;
  max-width: 1050px;

  @media ${signin.sm} {
    padding: 32px 0;
  }
`;

const SectionNameWrapper = styled(b.Box)`
  padding: 20px 0;
  @media ${signin.sm} {
    padding: 0;
  }
`;

const SectionWrapper = styled(b.Box)`
  position: relative;
  height: 10px;
`;

const SectionName = styled(b.Text)`
  font-family: 'SlackLato-Bold';
  color: ${({ color }) => color};
  margin: 0;
  text-transform: uppercase;
  font-size: 0.7rem;

  @media ${signin.sm} {
    font-size: 0.65rem;
  }
`;

const HeartIconWrapper = styled(b.Box)`
  position: absolute;
  top: -4px;
  left: 32px;
`;

const ListWrapper = styled(b.Flex)`
  display: block;
  @media ${signin.sm} {
    display: flex;
  }
`;

const ListContainer = styled(b.Box)`
  border-bottom: 1px solid #f2f2f2;
  width: 100%;
  @media ${signin.sm} {
    width: 25%;
  }
`;

const List = styled.ul`
  display: none;

  @media ${signin.sm} {
    display: block;
    padding: 0;
  }
`;

const Item = styled.li`
  list-style: none;
  color: #696969;
  font-size: 0.79rem;
  font-family: 'SlackLato-Light';
  margin: 5px 0;
`;

const BottomContainer = styled(b.Box)`
  width: 100%;
  max-width: 1050px;
`;

const ContactWrapper = styled(b.Anchor)`
  position: relative;
  bottom: 1px;

  &:hover {
    color: #bababe;
  }
`;

const LogoWrapper = styled(b.Anchor)`
  position: relative;
  top: 2px;
`;
