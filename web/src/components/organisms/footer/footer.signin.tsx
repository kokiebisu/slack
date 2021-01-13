import React, { useContext } from "react";
import { useState } from "react";

// Blocks
import * as b from "../../../global/blocks";
import styled, { ThemeContext } from "styled-components";

// Breakpoints
import { signin } from "../../../global/sizes";

// Svgs
import { NoNameLogoMono } from "../../../assets/svg/Logo";
import { Minus, Plus } from "../../../assets/svg";

import { Button } from "../../atoms/button";

export const SignInFooter: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  const sections = [
    {
      section: "Using Slack",
      color: theme.colors.orange__dark,
      items: [
        { title: "Product", url: "/" },
        { title: "Enterprise", url: "/" },
        { title: "Pricing", url: "/" },
        { title: "Support", url: "/" },
        { title: "Slack guides", url: "/" },
        { title: "App Directory", url: "/" },
        { title: "API", url: "/" },
      ],
    },
    {
      section: "Slack",
      color: theme.colors.pink__dark,
      items: [
        { title: "Jobs", url: "/" },
        { title: "Customers", url: "/" },
        { title: "Developers", url: "/" },
        { title: "Events", url: "/" },
        { title: "Blog", url: "/" },
      ],
    },
    {
      section: "Legal",
      color: theme.colors.green,
      items: [
        { title: "Privacy", url: "/" },
        { title: "Security", url: "/" },
        { title: "Terms of Service", url: "/" },
        { title: "Policies", url: "/" },
      ],
    },
    {
      section: "Handy Links",
      color: theme.colors.purple__light,
      items: [
        { title: "Download desktop app", url: "/" },
        { title: "Download mobile app", url: "/" },
        { title: "Brand guidelines", url: "/" },
        { title: "Slack at work", url: "/" },
        { title: "Status", url: "/" },
      ],
    },
  ];

  const [revealed, setRevealed] = useState<{ [property: string]: boolean }>({
    "Using Slack": false,
    Slack: false,
    Legal: false,
    "Handy Links": false,
  });

  return (
    <b.Footer width={1} height={350} backgroundColor={theme.colors.white}>
      <b.Box borderTop="1px solid" borderColor={theme.colors.gray__lighter}>
        <b.Flex justifyContent="center">
          <Top width={1} maxWidth={1050}>
            <b.Box px={3}>
              <ListWrapper>
                {sections.map(({ section, color, items }, sectionIndex) => {
                  return (
                    <ListContainer
                      borderBottom="1px solid"
                      borderColor={theme.colors.white__dark}
                      width={1}
                      key={sectionIndex}
                      onClick={() =>
                        setRevealed({
                          ...revealed,
                          [section]: !revealed[section],
                        })
                      }
                    >
                      <b.Box py={2}>
                        <SectionNameWrapper
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <SectionName
                            fontSize={14}
                            fontFamily="SlackLato-Bold"
                            color={color}
                            uppercase
                          >
                            {section}
                          </SectionName>
                          {revealed[section] ? (
                            <IconWrapper className="reveal">
                              <Minus />
                            </IconWrapper>
                          ) : (
                            <IconWrapper className="reveal">
                              <Plus />
                            </IconWrapper>
                          )}
                        </SectionNameWrapper>
                      </b.Box>
                      <LargeList>
                        {items.map((item, itemsIndex) => {
                          return (
                            <div key={itemsIndex}>
                              <Button variant="link" {...item} />
                            </div>
                          );
                        })}
                      </LargeList>
                      {revealed[section] ? (
                        <Ul pr={3}>
                          {items.map((item, itemsIndex) => {
                            return (
                              <div key={itemsIndex}>
                                <Button variant="link" {...item} />
                              </div>
                            );
                          })}
                        </Ul>
                      ) : null}
                    </ListContainer>
                  );
                })}
              </ListWrapper>
            </b.Box>
          </Top>
        </b.Flex>
      </b.Box>
      <b.Box backgroundColor="white__dark" py={3}>
        <b.Flex justifyContent="center">
          <b.Box width={1} maxWidth={1050}>
            <b.Box px={3}>
              <b.Flex justifyContent="space-between">
                <IconWrapper>
                  <NoNameLogoMono
                    width={20}
                    height={20}
                    fill={theme.colors.gray__light}
                  />
                </IconWrapper>
                <b.Box>
                  <b.Flex alignItems="center">
                    <b.Box bottom={1} mx={2}>
                      <b.Text fontSize={13} fontFamily="SlackLato-Regular">
                        Contact us
                      </b.Text>
                    </b.Box>
                    <b.Box mx={2}>
                      <Button variant="socialmedia" type="twitter" />
                    </b.Box>
                    <b.Box mx={2}>
                      <Button variant="socialmedia" type="facebook" />
                    </b.Box>
                  </b.Flex>
                </b.Box>
              </b.Flex>
            </b.Box>
          </b.Box>
        </b.Flex>
      </b.Box>
    </b.Footer>
  );
};

const Top = styled(b.Box)`
  @media ${signin.sm} {
    padding: 32px 0;
  }
`;

const SectionNameWrapper = styled(b.Flex)`
  @media ${signin.sm} {
    padding: 0;
    height: auto;
    display: block;
  }
`;

const SectionName = styled(b.Text)`
  @media ${signin.sm} {
    font-size: 0.65rem;
  }
`;

const IconWrapper = styled(b.Box)`
  &.reveal {
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

const Ul = styled(b.Ul)`
  @media ${signin.sm} {
    display: none;
  }
`;
