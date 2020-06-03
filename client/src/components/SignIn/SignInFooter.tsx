import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import * as b from '../../styles/blocks';

import { RoundedHeart } from '../../assets/svg/Heart';

import {
  NoNameLogoMono,
  TwitterLogo,
  YoutubeLogo,
} from '../../assets/svg/Logo';

import { signin } from '../../styles/sizes';

import { Minus } from '../../assets/svg/Minus';
import { Plus } from '../../assets/svg/Plus';

interface Props {}

export const SignInFooter: React.FC<Props> = () => {
  const sections = {
    'Using Slack': [
      { name: 'Product', url: '/' },
      { name: 'Enterprise', url: '/' },
      { name: 'Pricing', url: '/' },
      { name: 'Support', url: '/' },
      { name: 'Slack guides', url: '/' },
      { name: 'App Directory', url: '/' },
      { name: 'API', url: '/' },
    ],
    Slack: [
      { name: 'Jobs', url: '/' },
      { name: 'Customers', url: '/' },
      { name: 'Developers', url: '/' },
      { name: 'Events', url: '/' },
      { name: 'Blog', url: '/' },
    ],
    Legal: [
      { name: 'Privacy', url: '/' },
      { name: 'Security', url: '/' },
      { name: 'Terms of Service', url: '/' },
      { name: 'Policies', url: '/' },
    ],
    'Handy Links': [
      { name: 'Download desktop app', url: '/' },
      { name: 'Download mobile app', url: '/' },
      { name: 'Brand guidelines', url: '/' },
      { name: 'Slack at work', url: '/' },
      { name: 'Status', url: '/' },
    ],
  };

  const [revealed, setRevealed] = useState({
    usingslack: false,
    slack: false,
    legal: false,
    handylinks: false,
  });

  return (
    <Wrapper>
      <b.Box borderTop='1px solid' borderColor='#ddd'>
        <b.Flex justifyContent='center'>
          <TopContainer>
            <b.Box px={3}>
              <ListWrapper>
                <ListContainer
                  onClick={() =>
                    setRevealed({
                      ...revealed,
                      usingslack: !revealed.usingslack,
                    })
                  }>
                  <SectionNameWrapper>
                    <SectionName color='#de4e2b'>Using Slack</SectionName>
                    {revealed.usingslack ? (
                      <RevealButton>
                        <Minus width={15} height={15} color='#616061' />
                      </RevealButton>
                    ) : (
                      <RevealButton>
                        <Plus width={15} height={15} color='#616061' />
                      </RevealButton>
                    )}
                  </SectionNameWrapper>
                  <LargeList>
                    {sections['Using Slack'].map((section, index) => {
                      return (
                        <React.Fragment key={index}>
                          <Item>
                            <b.Anchor href={section.url}>
                              <b.Box py={1}>{section.name}</b.Box>
                            </b.Anchor>
                          </Item>
                        </React.Fragment>
                      );
                    })}
                  </LargeList>
                  {revealed.usingslack ? (
                    <SmallList>
                      {sections['Using Slack'].map((section, index) => {
                        return (
                          <React.Fragment key={index}>
                            <Item>
                              <b.Anchor href={section.url}>
                                <b.Box py={1}>{section.name}</b.Box>
                              </b.Anchor>
                            </Item>
                          </React.Fragment>
                        );
                      })}
                    </SmallList>
                  ) : null}
                </ListContainer>
                <ListContainer
                  onClick={() =>
                    setRevealed({
                      ...revealed,
                      slack: !revealed.slack,
                    })
                  }>
                  <SectionNameWrapper>
                    <SectionWrapper>
                      <b.Flex alignItems='center'>
                        <SectionName color='#e32072'>Slack</SectionName>
                        <HeartIconWrapper>
                          <b.Box ml={1}>
                            <RoundedHeart
                              width={10}
                              height={10}
                              color='#e32072'
                            />
                          </b.Box>
                        </HeartIconWrapper>
                      </b.Flex>
                    </SectionWrapper>
                    {revealed.slack ? (
                      <RevealButton>
                        <Minus width={15} height={15} color='#616061' />
                      </RevealButton>
                    ) : (
                      <RevealButton>
                        <Plus width={15} height={15} color='#616061' />
                      </RevealButton>
                    )}
                  </SectionNameWrapper>
                  <LargeList>
                    {sections['Slack'].map((section, index) => {
                      return (
                        <React.Fragment key={index}>
                          <Item>
                            <b.Anchor href={section.url}>
                              <b.Box py={1}>{section.name}</b.Box>
                            </b.Anchor>
                          </Item>
                        </React.Fragment>
                      );
                    })}
                  </LargeList>

                  {revealed.slack ? (
                    <SmallList>
                      {sections['Slack'].map((section, index) => {
                        return (
                          <React.Fragment key={index}>
                            <Item>
                              <b.Anchor href={section.url}>
                                <b.Box py={1}>{section.name}</b.Box>
                              </b.Anchor>
                            </Item>
                          </React.Fragment>
                        );
                      })}
                    </SmallList>
                  ) : null}
                </ListContainer>
                <ListContainer
                  onClick={() =>
                    setRevealed({
                      ...revealed,
                      legal: !revealed.legal,
                    })
                  }>
                  <SectionNameWrapper>
                    <SectionName color='#007a5a'>Legal</SectionName>
                    {revealed.legal ? (
                      <RevealButton>
                        <Minus width={15} height={15} color='#616061' />
                      </RevealButton>
                    ) : (
                      <RevealButton>
                        <Plus width={15} height={15} color='#616061' />
                      </RevealButton>
                    )}
                  </SectionNameWrapper>
                  <LargeList>
                    {sections['Legal'].map((section, index) => {
                      return (
                        <React.Fragment key={index}>
                          <Item>
                            <b.Anchor href={section.url}>
                              <b.Box py={1}>{section.name}</b.Box>
                            </b.Anchor>
                          </Item>
                        </React.Fragment>
                      );
                    })}
                  </LargeList>
                  {revealed.legal ? (
                    <SmallList>
                      {sections['Legal'].map((section, index) => {
                        return (
                          <React.Fragment key={index}>
                            <Item>
                              <b.Anchor href={section.url}>
                                <b.Box py={1}>{section.name}</b.Box>
                              </b.Anchor>
                            </Item>
                          </React.Fragment>
                        );
                      })}
                    </SmallList>
                  ) : null}
                </ListContainer>
                <ListContainer
                  onClick={() =>
                    setRevealed({
                      ...revealed,
                      handylinks: !revealed.handylinks,
                    })
                  }>
                  <SectionNameWrapper>
                    <SectionName color='#4b6bc6'>Handy Links</SectionName>
                    {revealed.handylinks ? (
                      <RevealButton>
                        <Minus width={15} height={15} color='#616061' />
                      </RevealButton>
                    ) : (
                      <RevealButton>
                        <Plus width={15} height={15} color='#616061' />
                      </RevealButton>
                    )}
                  </SectionNameWrapper>
                  <LargeList>
                    {sections['Handy Links'].map((section, index) => {
                      return (
                        <React.Fragment key={index}>
                          <Item>
                            <b.Anchor href={section.url}>
                              <b.Box py={1}>{section.name}</b.Box>
                            </b.Anchor>
                          </Item>
                        </React.Fragment>
                      );
                    })}
                  </LargeList>

                  {revealed.handylinks ? (
                    <SmallList>
                      {sections['Handy Links'].map((section, index) => {
                        return (
                          <React.Fragment key={index}>
                            <Item>
                              <b.Anchor href={section.url}>
                                <b.Box py={1}>{section.name}</b.Box>
                              </b.Anchor>
                            </Item>
                          </React.Fragment>
                        );
                      })}
                    </SmallList>
                  ) : null}
                </ListContainer>
              </ListWrapper>
            </b.Box>
          </TopContainer>
        </b.Flex>
      </b.Box>
      <b.Box backgroundColor='#f4f4f4' py={3}>
        <b.Flex justifyContent='center'>
          <BottomContainer>
            <b.Box px={3}>
              <b.Flex justifyContent='space-between'>
                <b.Box>
                  <NoNameLogoMono width={20} height={20} color='#868686' />
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

const Wrapper = styled.footer`
  width: 100%;
  height: 350px;
  background-color: white;
`;

const TopContainer = styled(b.Box)`
  width: 100%;
  padding: 0;
  max-width: 1050px;

  @media ${signin.sm} {
    padding: 32px 0;
  }
`;

const SectionNameWrapper = styled(b.Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  @media ${signin.sm} {
    padding: 0;
    height: auto;
    display: block;
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

const RevealButton = styled(b.Box)`
  display: block;

  @media ${signin.sm} {
    padding: 0;
    display: none;
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
  cursor: pointer;

  @media ${signin.sm} {
    border-bottom: 0;
    width: 25%;
  }
`;

const LargeList = styled.ul`
  display: none;

  @media ${signin.sm} {
    display: block;
    padding: 0;
  }
`;

const SmallList = styled.ul`
  display: block;
  padding-left: 10px;

  @media ${signin.sm} {
    display: none;
  }

  div {
    font-family: 'SlackLato-Regular';
  }
`;

const Item = styled.li`
  list-style: none;
  color: #696969;
  font-size: 0.79rem;
  font-family: 'SlackLato-Light';
  margin: 5px 0;

  &:hover {
    color: #9e9ea5;
    cursor: pointer;
  }
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
