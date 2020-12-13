import * as React from "react";
import { useState } from "react";

// Blocks
import * as b from "global/blocks";

// Svgs
import { RoundedHeart, Minus, Plus } from "assets/svg";
import { NoNameLogoMono, TwitterLogo, YoutubeLogo } from "assets/svg/Logo";

import styled from "styled-components";

// Breakpoints
import { signin } from "global/sizes";

export const FindFooter: React.FC<{}> = () => {
  const sections = {
    "Using Slack": [
      { name: "Product", url: "/" },
      { name: "Enterprise", url: "/" },
      { name: "Pricing", url: "/" },
      { name: "Support", url: "/" },
      { name: "Slack guides", url: "/" },
      { name: "App Directory", url: "/" },
      { name: "API", url: "/" },
    ],
    Slack: [
      { name: "Jobs", url: "/" },
      { name: "Customers", url: "/" },
      { name: "Developers", url: "/" },
      { name: "Events", url: "/" },
      { name: "Blog", url: "/" },
    ],
    Legal: [
      { name: "Privacy", url: "/" },
      { name: "Security", url: "/" },
      { name: "Terms of Service", url: "/" },
      { name: "Policies", url: "/" },
    ],
    "Handy Links": [
      { name: "Download desktop app", url: "/" },
      { name: "Download mobile app", url: "/" },
      { name: "Brand guidelines", url: "/" },
      { name: "Slack at work", url: "/" },
      { name: "Status", url: "/" },
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
      <b.Box borderTop="1px solid" borderColor="gray__lighter">
        <b.Flex justifyContent="center">
          <TopContainer>
            <b.Box px={3}>
              <ListWrapper>
                <ListContainer
                  onClick={() =>
                    setRevealed({
                      ...revealed,
                      usingslack: !revealed.usingslack,
                    })
                  }
                >
                  <SectionNameWrapper>
                    <SectionName color="orange__dark">Using Slack</SectionName>
                    {revealed.usingslack ? (
                      <IconWrapper className="reveal">
                        <Minus />
                      </IconWrapper>
                    ) : (
                      <IconWrapper className="reveal">
                        <Plus />
                      </IconWrapper>
                    )}
                  </SectionNameWrapper>
                  <LargeList>
                    {sections["Using Slack"].map((section, index) => {
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
                      {sections["Using Slack"].map((section, index) => {
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
                  }
                >
                  <SectionNameWrapper>
                    <SectionWrapper>
                      <b.Flex alignItems="center">
                        <SectionName color="pink__dark">Slack</SectionName>
                        <IconWrapper className="roundedheart" ml={1}>
                          <RoundedHeart />
                        </IconWrapper>
                      </b.Flex>
                    </SectionWrapper>
                    {revealed.slack ? (
                      <IconWrapper className="reveal">
                        <Minus />
                      </IconWrapper>
                    ) : (
                      <IconWrapper className="reveal">
                        <Plus />
                      </IconWrapper>
                    )}
                  </SectionNameWrapper>
                  <LargeList>
                    {sections["Slack"].map((section, index) => {
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
                      {sections["Slack"].map((section, index) => {
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
                  }
                >
                  <SectionNameWrapper>
                    <SectionName color="green">Legal</SectionName>
                    {revealed.legal ? (
                      <IconWrapper className="reveal">
                        <Minus />
                      </IconWrapper>
                    ) : (
                      <IconWrapper className="reveal">
                        <Plus />
                      </IconWrapper>
                    )}
                  </SectionNameWrapper>
                  <LargeList>
                    {sections["Legal"].map((section, index) => {
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
                      {sections["Legal"].map((section, index) => {
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
                  }
                >
                  <SectionNameWrapper>
                    <SectionName color="purple__light">Handy Links</SectionName>
                    {revealed.handylinks ? (
                      <IconWrapper className="reveal">
                        <Minus />
                      </IconWrapper>
                    ) : (
                      <IconWrapper className="reveal">
                        <Plus />
                      </IconWrapper>
                    )}
                  </SectionNameWrapper>
                  <LargeList>
                    {sections["Handy Links"].map((section, index) => {
                      return (
                        <React.Fragment key={index}>
                          <Item>
                            <b.Anchor href={section.url}>
                              <b.Box py={1}>
                                <b.Text color="gray">{section.name}</b.Text>
                              </b.Box>
                            </b.Anchor>
                          </Item>
                        </React.Fragment>
                      );
                    })}
                  </LargeList>

                  {revealed.handylinks ? (
                    <SmallList>
                      {sections["Handy Links"].map((section, index) => {
                        return (
                          <React.Fragment key={index}>
                            <Item>
                              <b.Anchor href={section.url}>
                                <b.Box py={1}>
                                  <b.Text color="gray">{section.name}</b.Text>
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
      <b.Box backgroundColor="white__dark" py={3}>
        <b.Flex justifyContent="center">
          <BottomContainer>
            <b.Box px={3}>
              <b.Flex justifyContent="space-between">
                <IconWrapper className="nonamelogomono">
                  <NoNameLogoMono />
                </IconWrapper>
                <b.Box>
                  <b.Flex alignItems="center">
                    <ContactWrapper mx={2}>
                      <b.Text fontSize={13} fontFamily="SlackLato-Regular">
                        Contact us
                      </b.Text>
                    </ContactWrapper>
                    <IconWrapper mx={2} className="socialmedia">
                      <TwitterLogo />
                    </IconWrapper>
                    <IconWrapper mx={2} className="socialmedia">
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

const Wrapper = styled.footer`
  width: 100%;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.white};
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
  font-family: "SlackLato-Bold";
  color: ${({ color }) => color};
  margin: 0;
  text-transform: uppercase;
  font-size: 0.7rem;

  @media ${signin.sm} {
    font-size: 0.65rem;
  }
`;

const IconWrapper = styled(b.Box)`
  &.roundedheart {
    position: absolute;
    top: -4px;
    left: 32px;

    svg {
      width: 10px;
      height: 10px;
      path {
        fill: ${({ theme }) => theme.colors.pink__dark};
      }
    }
  }

  &.nonamelogomono {
    svg {
      width: 20px;
      height: 20px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }

  &.socialmedia {
    top: 2px;
    svg {
      width: 20px;
      height: 20px;
      path {
        fill: ${({ theme }) => theme.colors.gray__dark};
      }
    }
  }

  &.reveal {
    display: block;

    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }

    @media ${signin.sm} {
      padding: 0;
      display: none;
    }
  }
`;

const ListWrapper = styled(b.Flex)`
  display: block;
  @media ${signin.sm} {
    display: flex;
  }
`;

const ListContainer = styled(b.Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.white__dark};
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
    font-family: "SlackLato-Regular";
  }
`;

const Item = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.79rem;
  font-family: "SlackLato-Light";
  margin: 5px 0;

  &:hover {
    color: ${({ theme }) => theme.colors.gray__dark};
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
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;
