import * as React from 'react';
import { useState } from 'react';

// Blocks
import * as b from 'global/blocks';

// Svgs
import { NoNameLogoMono, TwitterLogo, YoutubeLogo } from 'assets/svg/Logo';
import { Minus, Plus, RoundedHeart } from 'assets/svg';

// Styles
import {
  Wrapper,
  TopContainer,
  SectionNameWrapper,
  SectionWrapper,
  SectionName,
  IconWrapper,
  ListWrapper,
  ListContainer,
  LargeList,
  SmallList,
  Item,
  BottomContainer,
  ContactWrapper,
} from 'components/Signin/Footer/index.styles';

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
      <b.Box borderTop='1px solid' borderColor='gray__lighter'>
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
                    <SectionName color='orange__dark'>Using Slack</SectionName>
                    {revealed.usingslack ? (
                      <IconWrapper className='reveal'>
                        <Minus />
                      </IconWrapper>
                    ) : (
                      <IconWrapper className='reveal'>
                        <Plus />
                      </IconWrapper>
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
                        <SectionName color='pink__dark'>Slack</SectionName>
                        <IconWrapper className='roundedheart' ml={1}>
                          <RoundedHeart />
                        </IconWrapper>
                      </b.Flex>
                    </SectionWrapper>
                    {revealed.slack ? (
                      <IconWrapper className='reveal'>
                        <Minus />
                      </IconWrapper>
                    ) : (
                      <IconWrapper className='reveal'>
                        <Plus />
                      </IconWrapper>
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
                    <SectionName color='green'>Legal</SectionName>
                    {revealed.legal ? (
                      <IconWrapper className='reveal'>
                        <Minus />
                      </IconWrapper>
                    ) : (
                      <IconWrapper className='reveal'>
                        <Plus />
                      </IconWrapper>
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
                    <SectionName color='purple__light'>Handy Links</SectionName>
                    {revealed.handylinks ? (
                      <IconWrapper className='reveal'>
                        <Minus />
                      </IconWrapper>
                    ) : (
                      <IconWrapper className='reveal'>
                        <Plus />
                      </IconWrapper>
                    )}
                  </SectionNameWrapper>
                  <LargeList>
                    {sections['Handy Links'].map((section, index) => {
                      return (
                        <React.Fragment key={index}>
                          <Item>
                            <b.Anchor href={section.url}>
                              <b.Box py={1}>
                                <b.Text color='gray'>{section.name}</b.Text>
                              </b.Box>
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
                                <b.Box py={1}>
                                  <b.Text color='gray'>{section.name}</b.Text>
                                </b.Box>
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
      <b.Box backgroundColor='white__dark' py={3}>
        <b.Flex justifyContent='center'>
          <BottomContainer>
            <b.Box px={3}>
              <b.Flex justifyContent='space-between'>
                <IconWrapper className='nonamelogomono'>
                  <NoNameLogoMono />
                </IconWrapper>
                <b.Box>
                  <b.Flex alignItems='center'>
                    <ContactWrapper mx={2}>
                      <b.Text fontSize={13} fontFamily='SlackLato-Regular'>
                        Contact us
                      </b.Text>
                    </ContactWrapper>
                    <IconWrapper mx={2} className='socialmedia'>
                      <TwitterLogo />
                    </IconWrapper>
                    <IconWrapper mx={2} className='socialmedia'>
                      <YoutubeLogo />
                    </IconWrapper>
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
