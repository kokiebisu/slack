import * as React from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../../styles/blocks';

// Components
import { Link } from '../Landing.styles';

// Breakpoints
import { landing } from '../../../styles/sizes';

// Svgs
import { BottomArrow } from '../../../assets/svg/Arrows';
import {
  NoNameLogo,
  TwitterLogo,
  FacebookLogo,
  YoutubeLogo,
  LinkedinLogo,
} from '../../../assets/svg/Logo';
import { Globe } from '../../../assets/svg';

import {
  Wrapper,
  ContentWrapper,
  ContentContainer,
  LogoWrapper,
  SectionsWrapper,
  Sections,
  Section,
  SectionName,
  Items,
  IconWrapper,
  Item,
  ItemLink,
  FooterContentWrapper,
  OptionsWrapper,
  RegionContainer,
  ArrowWrapper,
  SocialMediaWrapper,
  CopyrightWrapper,
  CopyrightContainer,
  Copyright,
} from './footer.styles';

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
