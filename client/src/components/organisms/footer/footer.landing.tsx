import React from 'react';
import * as b from 'global/blocks';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * Assets
 */
import { Globe } from 'assets/svg';
import { BottomArrow } from 'assets/svg';
import { NoNameLogo } from 'assets/svg/Logo';

/**
 * Global
 */
import { size } from 'global/sizes';

/**
 * Props
 */
import { LandingFooterProps } from './props';

/**
 * Components
 */
import { Button } from 'components/atoms/button/button.component';

export const LandingFooter: React.FC<LandingFooterProps> = () => {
  const options = [
    { name: 'Status', url: '/' },
    { name: 'Privacy & Terms', url: '/' },
    { name: 'Contact Us', url: '/' },
  ];

  const socialmedias = ['twitter', 'facebook', 'linkedin', 'youtube'];

  const sections = [
    {
      subsections: [
        {
          title: 'Product',
          items: [
            { name: 'Features', url: '/' },
            { name: 'Enterprise', url: '/' },
            { name: 'Security', url: '/' },
            { name: 'Customer Stories', url: '/' },
            { name: 'Pricing', url: '/' },
            { name: 'Slack Demo', url: '/' },
          ],
        },
        {
          title: 'Slack for teams',
          items: [
            { name: 'Engineering', url: '/' },
            { name: 'Financial Services', url: '/' },
            { name: 'Sales', url: '/' },
            { name: 'IT', url: '/' },
            { name: 'Marketing', url: '/' },
            { name: 'Customer Support', url: '/' },
            { name: 'Human Resources', url: '/' },
            { name: 'Project Management', url: '/' },
            { name: 'Media', url: '/' },
          ],
        },
      ],
    },
    {
      subsections: [
        {
          title: 'Resources',
          items: [
            { name: 'Slack Tips', url: '/' },
            { name: 'Blog', url: '/' },
            { name: 'Events', url: '/' },
            { name: 'Slack Certified Program', url: '/' },
            { name: 'Help Center', url: '/' },
            { name: 'API', url: '/' },
            { name: 'App Directory', url: '/' },
            { name: 'Download Slack', url: '/' },
            { name: 'Partners', url: '/' },
          ],
        },
        {
          title: 'Company',
          items: [
            { name: 'About Us', url: '/' },
            { name: 'Leadership', url: '/' },
            { name: 'News', url: '/' },
            { name: 'Media Kit', url: '/' },
            { name: 'Careers', url: '/' },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <b.Box className='footer__logo'>
        <b.Container>
          <Content className='logo'>
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
                                <SectionName py={2}>
                                  <b.Text>Product</b.Text>
                                </SectionName>
                                <Items>
                                  {subsection.items.map((item, index) => {
                                    return (
                                      <Item key={index}>
                                        <ItemLink to={item.url}>
                                          {item.name}
                                        </ItemLink>
                                      </Item>
                                    );
                                  })}
                                </Items>
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
          </Content>
        </b.Container>
      </b.Box>
      <b.Box className='footer__options'>
        <Content className='options' py={4}>
          <b.Container>
            <b.Flex>
              <OptionsWrapper>
                <b.Flex alignItems='center'>
                  <b.Flex>
                    {options.map((option, index) => {
                      return (
                        <b.Box mr={3}>
                          <Button
                            type='transparent'
                            to={option.url}
                            title={option.name}
                          />
                        </b.Box>
                      );
                    })}
                  </b.Flex>
                  <ChangeRegionButton>
                    <b.Flex alignItems='center'>
                      <IconWrapper className='globe' mr={1}>
                        <Globe />
                      </IconWrapper>
                      <b.Text>Change Region</b.Text>
                      <b.Box ml={2}>
                        <IconWrapper className='bottom__arrow'>
                          <BottomArrow />
                        </IconWrapper>
                      </b.Box>
                    </b.Flex>
                  </ChangeRegionButton>
                </b.Flex>
              </OptionsWrapper>
              <SocialMediaWrapper>
                {socialmedias.map((socialmedia, index) => {
                  return (
                    <div key={index}>
                      <Button type='socialmedia' platform={socialmedia} />
                    </div>
                  );
                })}
              </SocialMediaWrapper>
            </b.Flex>
          </b.Container>
        </Content>
      </b.Box>
      <CopyrightWrapper>
        <b.Container>
          <Copyright>
            © Copyright 2020 Slack Technologies, Inc. All rights reserved.
            Various trademarks held by their respective owners.
          </Copyright>
        </b.Container>
      </CopyrightWrapper>
    </div>
  );
};

const Content = styled(b.Box)`
  padding: 24px 0;
`;

const CopyrightWrapper = styled.div`
  background-color: gray;
`;

const Copyright = styled.p`
  font-size: 12px;
`;

const OptionsWrapper = styled(b.Box)`
  & > div {
    flex-direction: column;
    @media ${size.sm} {
      flex-direction: row;
    }
  }
`;

const ChangeRegionButton = styled(b.Button)`
  margin: 30px 0;

  & p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};
    font-family: 'CircularPro-Bold';
  }

  & > div {
    & > div {
      &:nth-child(3) {
        display: none;
        @media ${size.sm} {
          display: block;
        }
      }
    }
  }

  &:hover {
    & p {
      color: ${({ theme }) => theme.colors.blue};
    }

    & > div {
      & > div {
        &:nth-child(1) {
          & > svg {
            path {
              fill: ${({ theme }) => theme.colors.blue} !important;
            }
          }
        }
        &:nth-child(3) {
          & > div {
            & > svg {
              path {
                fill: ${({ theme }) => theme.colors.blue} !important;
              }
            }
          }
        }
      }
    }
  }

  @media ${size.sm} {
    margin: 0px;
  }
`;

const IconWrapper = styled(b.Box)`
  position: relative;
  &.bottom__arrow {
    bottom: 2px;
    svg {
      width: 8px;
      height: 8px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }

  &.globe {
    top: 2px;
    svg {
      width: 16px;
      height: 16px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
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

export const SectionWrapper = styled(b.Flex)`
  width: 100%;
  flex-direction: row;
  @media ${size.xs} {
    width: 50%;
  }

  & > div {
    width: 50%;
  }
`;

export const SectionName = styled(b.Box)`
  & > p {
    color: #464646;
    text-transform: uppercase;
    font-size: 14px;
    font-family: 'CircularPro-Bold';
  }
`;

export const Items = styled.ul`
  color: #696969;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  color: #868686;
  font-family: 'SlackLato-Regular';
  padding: 10px 0;
  font-size: 14px;
`;

export const ItemLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray};
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
