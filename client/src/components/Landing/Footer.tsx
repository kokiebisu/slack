import * as React from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../styles/blocks';

// Components
import { Link } from './Landing.styles';

// Breakpoints
import { landing } from '../../styles/sizes';

// Svgs
import { BottomArrow } from '../../assets/svg/Arrows';
import {
  NoNameLogo,
  TwitterLogo,
  FacebookLogo,
  YoutubeLogo,
  LinkedinLogo,
} from '../../assets/svg/Logo';
import { Globe } from '../../assets/svg';

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <b.Container>
          <ContentContainer>
            <LogoWrapper>
              <IconWrapper className='nonamelogo'>
                <NoNameLogo />
              </IconWrapper>
            </LogoWrapper>
            <SectionsWrapper>
              <Sections>
                <Section>
                  <b.Box py={2}>
                    <SectionName>Product</SectionName>
                  </b.Box>
                  <Items>
                    <Item>
                      <ItemLink>Features</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Enterprise</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Security</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Customer Stories</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Pricing</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Slack Demo</ItemLink>
                    </Item>
                  </Items>
                </Section>
                <Section>
                  <b.Box py={2}>
                    <SectionName>Slack for teams</SectionName>
                  </b.Box>
                  <Items>
                    <Item>
                      <ItemLink>Engineering</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Financial Services</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Sales</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>IT</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Marketing</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Customer Support</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Human Resources</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Project Management</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Media</ItemLink>
                    </Item>
                  </Items>
                </Section>
              </Sections>
              <Sections>
                <Section>
                  <b.Box py={2}>
                    <SectionName>Resources</SectionName>
                  </b.Box>
                  <Items>
                    <Item>
                      <ItemLink>Slack Tips</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Blog</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Events</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Slack Certified Program</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Help Center</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>API</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>App Directory</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Download Slack</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Partners</ItemLink>
                    </Item>
                  </Items>
                </Section>
                <Section>
                  <b.Box py={2}>
                    <SectionName>Company</SectionName>
                  </b.Box>
                  <Items>
                    <Item>
                      <ItemLink>About Us</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Leadership</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>News</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Media Kit</ItemLink>
                    </Item>
                    <Item>
                      <ItemLink>Careers</ItemLink>
                    </Item>
                  </Items>
                </Section>
              </Sections>
            </SectionsWrapper>
          </ContentContainer>
        </b.Container>
      </ContentWrapper>
      <b.Box py={4} backgroundColor='#F5F5F5'>
        <b.Container>
          <FooterContentWrapper>
            <OptionsWrapper>
              <b.Flex>
                <b.Box mr={3}>
                  <ItemLink
                    fontSize={14}
                    color='#454545'
                    fontFamily='CircularPro-Bold'>
                    Status
                  </ItemLink>
                </b.Box>
                <b.Box mr={3}>
                  <ItemLink
                    fontSize={14}
                    color='#454545'
                    fontFamily='CircularPro-Bold'>
                    Privacy & Terms
                  </ItemLink>
                </b.Box>
                <b.Box>
                  <ItemLink
                    fontSize={14}
                    color='#454545'
                    fontFamily='CircularPro-Bold'>
                    Contact Us
                  </ItemLink>
                </b.Box>
              </b.Flex>
              <RegionContainer>
                <b.Flex alignItems='center'>
                  <b.Box mr={1}>
                    <IconWrapper className='globe'>
                      <Globe />
                    </IconWrapper>
                  </b.Box>
                  <Link
                    fontSize={14}
                    color='#454545'
                    fontFamily='CircularPro-Bold'>
                    Change Region
                  </Link>
                  <ArrowWrapper ml={1}>
                    <IconWrapper className='bottomarrow'>
                      <BottomArrow />
                    </IconWrapper>
                  </ArrowWrapper>
                </b.Flex>
              </RegionContainer>
            </OptionsWrapper>
            <SocialMediaWrapper>
              <b.Box mx={2}>
                <IconWrapper className='socialmedia twitter'>
                  <TwitterLogo />
                </IconWrapper>
              </b.Box>
              <b.Box mx={2}>
                <IconWrapper className='socialmedia facebook'>
                  <FacebookLogo />
                </IconWrapper>
              </b.Box>
              <b.Box mx={2}>
                <IconWrapper className='socialmedia youtube'>
                  <YoutubeLogo />
                </IconWrapper>
              </b.Box>
              <b.Box mx={2}>
                <IconWrapper className='socialmedia linkedin'>
                  <LinkedinLogo />
                </IconWrapper>
              </b.Box>
            </SocialMediaWrapper>
          </FooterContentWrapper>
        </b.Container>
      </b.Box>
      <CopyrightWrapper>
        <CopyrightContainer>
          <Copyright>
            © Copyright 2020 Slack Technologies, Inc. All rights reserved.
            Various trademarks held by their respective owners.
          </Copyright>
        </CopyrightContainer>
      </CopyrightWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  @media ${landing.xl} {
    /* padding-top: 160px; */
    height: calc(100vh - 130px);
    max-height: 400px;
  }
`;

const LogoWrapper = styled(b.Box)`
  width: 100%;
  margin-bottom: 30px;
  @media ${landing.md} {
    width: 35%;
    margin-bottom: 0;
  }
`;

const ContentWrapper = styled(b.Box)`
  padding: 40px 0;
  @media ${landing.md} {
    padding: 70px 0;
  }
`;

const ContentContainer = styled(b.Flex)`
  flex-direction: column;
  @media ${landing.md} {
    flex-direction: row;
  }
`;

const SectionsWrapper = styled(b.Flex)`
  width: 100%;
  flex-direction: column;
  @media ${landing.sm} {
    flex-direction: row;
    width: 100%;
  }
`;

const Sections = styled(b.Flex)`
  width: 100%;
  flex-direction: row;
  @media ${landing.sm} {
    width: 50%;
  }
`;

const Section = styled(b.Box)`
  width: 50%;
`;

const SectionName = styled(b.Text)`
  color: #464646;
  text-transform: uppercase;
  font-size: 14px;
  font-family: 'CircularPro-Bold';
`;

const Items = styled.ul`
  color: #696969;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  color: #868686;
  font-family: 'SlackLato-Regular';
  padding: 10px 0;
  font-size: 14px;
`;

const ItemLink = styled(b.Text)`
  cursor: pointer;
  &:hover {
    color: #1264a3;
  }
`;

const ArrowWrapper = styled(b.Box)`
  display: none;
  @media ${landing.sm} {
    display: block;
  }
`;

const FooterContentWrapper = styled(b.Flex)`
  display: flex;
  flex-direction: column;
  @media ${landing.sm} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const OptionsWrapper = styled(b.Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${landing.sm} {
    flex-direction: row;
  }
`;

const RegionContainer = styled(b.Box)`
  margin: 30px 0;
  @media ${landing.sm} {
    margin: 0px;
    margin-left: 15px;
  }
`;

const CopyrightWrapper = styled(b.Box)`
  background-color: #ebeaeb;
  padding: 20px 0;
`;

const CopyrightContainer = styled(b.Container)``;

const Copyright = styled(b.Text)`
  font-size: 12px;
  text-align: center;
  @media ${landing.sm} {
    text-align: left;
  }
`;

const SocialMediaWrapper = styled(b.Flex)`
  justify-content: center;
  align-items: center;
  @media ${landing.sm} {
  }
`;

const IconWrapper = styled(b.Box)`
  &.nonamelogo {
    svg {
      width: 54px;
      height: 54px;
      path {
        &:nth-child(1) {
          fill: ${({ theme }) => theme.colors.blue__lighter};
        }
        &:nth-child(2) {
          fill: ${({ theme }) => theme.colors.green__lighter};
        }
        &:nth-child(3) {
          fill: ${({ theme }) => theme.colors.yello};
        }
        &:nth-child(4) {
          fill: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }

  &.socialmedia {
    svg {
      width: 20px;
      height: 20px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }

  &.twitter {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.blue__lighter};
      }
    }
  }

  &.facebook {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  &.linkedin {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  &.youtube {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.red__light};
      }
    }
  }

  &.bottomarrow {
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.black};
      }
    }
  }

  &.globe {
    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }
`;
