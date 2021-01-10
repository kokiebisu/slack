import React, { useContext } from "react";
import * as b from "global/blocks";
import styled, { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";

/** assets */
import { Globe } from "assets/svg";
import { BottomArrow } from "assets/svg";
import { NoNameLogo } from "assets/svg/Logo";

/** global */
import { size } from "global/sizes";

/** components */
import { Button } from "components/atoms/button";

export const LandingFooter: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  const options = [
    { name: "Status", url: "/" },
    { name: "Privacy & Terms", url: "/" },
    { name: "Contact Us", url: "/" },
  ];

  const socialmedias = ["twitter", "facebook", "linkedin", "youtube"];

  const sections = [
    {
      subsections: [
        {
          title: "Product",
          items: [
            { name: "Features", url: "/" },
            { name: "Enterprise", url: "/" },
            { name: "Security", url: "/" },
            { name: "Customer Stories", url: "/" },
            { name: "Pricing", url: "/" },
            { name: "Slack Demo", url: "/" },
          ],
        },
        {
          title: "Slack for teams",
          items: [
            { name: "Engineering", url: "/" },
            { name: "Financial Services", url: "/" },
            { name: "Sales", url: "/" },
            { name: "IT", url: "/" },
            { name: "Marketing", url: "/" },
            { name: "Customer Support", url: "/" },
            { name: "Human Resources", url: "/" },
            { name: "Project Management", url: "/" },
            { name: "Media", url: "/" },
          ],
        },
      ],
    },
    {
      subsections: [
        {
          title: "Resources",
          items: [
            { name: "Slack Tips", url: "/" },
            { name: "Blog", url: "/" },
            { name: "Events", url: "/" },
            { name: "Slack Certified Program", url: "/" },
            { name: "Help Center", url: "/" },
            { name: "API", url: "/" },
            { name: "App Directory", url: "/" },
            { name: "Download Slack", url: "/" },
            { name: "Partners", url: "/" },
          ],
        },
        {
          title: "Company",
          items: [
            { name: "About Us", url: "/" },
            { name: "Leadership", url: "/" },
            { name: "News", url: "/" },
            { name: "Media Kit", url: "/" },
            { name: "Careers", url: "/" },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <b.Box className="footer__logo">
        <b.Container>
          <b.Box py={4} className="logo">
            <b.Flex>
              <Logo>
                <NoNameLogo width={65} />
              </Logo>
              <Sections>
                {sections.map((section, index) => {
                  return (
                    <b.Box width={1} key={index}>
                      <b.Flex>
                        {section.subsections.map((subsection, index) => {
                          return (
                            <SectionWrapper key={index}>
                              <b.Box>
                                <b.Box py={2}>
                                  <b.Text
                                    color={theme.colors.gray__lighter}
                                    uppercase
                                    fontSize={14}
                                    fontFamily="CircularPro-Bold"
                                  >
                                    {subsection.title}
                                  </b.Text>
                                </b.Box>
                                <b.Box p={0} m={0}>
                                  {subsection.items.map((item, index) => {
                                    return (
                                      <b.Li py={3} key={index}>
                                        <b.Text
                                          fontSize={14}
                                          color={theme.colors.gray__light}
                                        >
                                          {item.name}
                                        </b.Text>
                                      </b.Li>
                                    );
                                  })}
                                </b.Box>
                              </b.Box>
                            </SectionWrapper>
                          );
                        })}
                      </b.Flex>
                    </b.Box>
                  );
                })}
              </Sections>
            </b.Flex>
          </b.Box>
        </b.Container>
      </b.Box>
      <b.Box className="footer__options">
        <b.Box py={4}>
          <b.Container>
            <b.Flex alignItems="center" justifyContent="space-between">
              <OptionsWrapper>
                <b.Flex alignItems="center">
                  <b.Flex>
                    {options.map((option, index) => {
                      return (
                        <b.Box mr={3} key={index}>
                          <Button
                            variant="transparent"
                            to={option.url}
                            content={
                              <b.Text fontSize={15}>{option.name}</b.Text>
                            }
                          />
                        </b.Box>
                      );
                    })}
                  </b.Flex>
                  <Button
                    variant="transparent"
                    content={
                      <b.Flex alignItems="center">
                        <b.Box mr={1}>
                          <Globe
                            width={16}
                            height={16}
                            fill={theme.colors.gray}
                          />
                        </b.Box>
                        <b.Text fontSize={15}>Change Region</b.Text>
                        <b.Box ml={2}>
                          <b.Box>
                            <BottomArrow
                              width={8}
                              height={8}
                              fill={theme.colors.gray}
                            />
                          </b.Box>
                        </b.Box>
                      </b.Flex>
                    }
                  />
                </b.Flex>
              </OptionsWrapper>
              <SocialMediaWrapper>
                {socialmedias.map((socialmedia, index) => {
                  return (
                    <div key={index}>
                      <Button variant="socialmedia" type={socialmedia} />
                    </div>
                  );
                })}
              </SocialMediaWrapper>
            </b.Flex>
          </b.Container>
        </b.Box>
      </b.Box>
      <b.Box backgroundColor={theme.colors.gray__lighter} py={3}>
        <b.Container>
          <b.Text fontSize={12}>
            © Copyright 2020 Slack Technologies, Inc. All rights reserved.
            Various trademarks held by their respective owners.
          </b.Text>
        </b.Container>
      </b.Box>
    </div>
  );
};

const OptionsWrapper = styled(b.Box)`
  & > div {
    flex-direction: column;
    @media ${size.sm} {
      flex-direction: row;
    }
  }
`;

const Logo = styled(b.Box)`
  width: 100%;
  margin-bottom: 30px;
  @media ${size.md} {
    width: 35%;
    margin-bottom: 0;
  }
`;

const Sections = styled(b.Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${size.xs} {
    flex-direction: row;
  }
`;

const SectionWrapper = styled(b.Flex)`
  width: 100%;
  flex-direction: row;
  @media ${size.xs} {
    width: 50%;
  }

  & > div {
    width: 50%;
  }
`;

const ItemLink = styled(Link)`
  &:hover {
    color: #1264a3;
  }
`;

const SocialMediaWrapper = styled(b.Flex)`
  justify-content: center;
  @media ${size.sm} {
    justify-content: flex-end;
  }
`;
