import React from 'react';
import styled from 'styled-components';

// Components
import { Link } from './Landing.styles';

// Sizes
import { landing } from '../../styles/sizes';

// SVG
import { FooterLogo } from '../../assets/svg/Logo';
import { BottomArrow } from '../../assets/svg/Arrows';
import {
  Globe,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
} from '../../assets/svg/Footer';

import * as b from '../../styles/blocks';

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <LogoWrapper>
            <FooterLogo height={54} width={54} />
          </LogoWrapper>
          <SectionsWrapper>
            <Sections>
              <Section>
                <b.Box py={2}>
                  <b.Text
                    color='#1d1d1d'
                    uppercase
                    fontSize={14}
                    fontFamily='CircularStd-Medium'>
                    Product
                  </b.Text>
                </b.Box>
                <Items>
                  <Item>
                    <Link>Features</Link>
                  </Item>
                  <Item>
                    <Link>Enterprise</Link>
                  </Item>
                  <Item>
                    <Link>Security</Link>
                  </Item>
                  <Item>
                    <Link>Customer Stories</Link>
                  </Item>
                  <Item>
                    <Link>Pricing</Link>
                  </Item>
                  <Item>
                    <Link>Slack Demo</Link>
                  </Item>
                </Items>
              </Section>
              <Section>
                <b.Box py={2}>
                  <b.Text
                    color='#1d1d1d'
                    uppercase
                    fontSize={14}
                    fontFamily='CircularStd-Medium'>
                    Slack for teams
                  </b.Text>
                </b.Box>
                <Items>
                  <Item>
                    <Link>Engineering</Link>
                  </Item>
                  <Item>
                    <Link>Financial Services</Link>
                  </Item>
                  <Item>
                    <Link>Sales</Link>
                  </Item>
                  <Item>
                    <Link>IT</Link>
                  </Item>
                  <Item>
                    <Link>Marketing</Link>
                  </Item>
                  <Item>
                    <Link>Customer Support</Link>
                  </Item>
                  <Item>
                    <Link>Human Resources</Link>
                  </Item>
                  <Item>
                    <Link>Project Management</Link>
                  </Item>
                  <Item>
                    <Link>Media</Link>
                  </Item>
                </Items>
              </Section>
            </Sections>
            <Sections>
              <Section>
                <b.Box py={2}>
                  <b.Text
                    color='#1d1d1d'
                    uppercase
                    fontSize={14}
                    fontFamily='CircularStd-Medium'>
                    Resources
                  </b.Text>
                </b.Box>
                <Items>
                  <Item>
                    <Link>Slack Tips</Link>
                  </Item>
                  <Item>
                    <Link>Blog</Link>
                  </Item>
                  <Item>
                    <Link>Events</Link>
                  </Item>
                  <Item>
                    <Link>Slack Certified Program</Link>
                  </Item>
                  <Item>
                    <Link>Help Center</Link>
                  </Item>
                  <Item>
                    <Link>API</Link>
                  </Item>
                  <Item>
                    <Link>App Directory</Link>
                  </Item>
                  <Item>
                    <Link>Download Slack</Link>
                  </Item>
                  <Item>
                    <Link>Partners</Link>
                  </Item>
                </Items>
              </Section>
              <Section>
                <b.Box py={2}>
                  <b.Text
                    color='#1d1d1d'
                    uppercase
                    fontSize={14}
                    fontFamily='CircularStd-Medium'>
                    Company
                  </b.Text>
                </b.Box>
                <Items>
                  <Item>
                    <Link>About Us</Link>
                  </Item>
                  <Item>
                    <Link>Leadership</Link>
                  </Item>
                  <Item>
                    <Link>News</Link>
                  </Item>
                  <Item>
                    <Link>Media Kit</Link>
                  </Item>
                  <Item>
                    <Link>Careers</Link>
                  </Item>
                </Items>
              </Section>
            </Sections>
          </SectionsWrapper>
        </ContentWrapper>
      </Container>
      <b.Box py={4} backgroundColor='#F5F5F5'>
        <b.Container>
          <b.Flex alignItems='center' justifyContent='space-between'>
            <b.Flex>
              <b.Box mr={3}>
                <Link fontSize={14} fontFamily='CircularStd-Medium'>
                  Status
                </Link>
              </b.Box>
              <b.Box mr={3}>
                <Link fontSize={14} fontFamily='CircularStd-Medium'>
                  Privacy & Terms
                </Link>
              </b.Box>
              <b.Box mr={3}>
                <Link fontSize={14} fontFamily='CircularStd-Medium'>
                  Contact Us
                </Link>
              </b.Box>
              <b.Box mr={3}>
                <b.Flex alignItems='center'>
                  <LinkBox mr={1}>
                    <Globe width={20} height={20} />
                  </LinkBox>
                  <Link fontSize={14} fontFamily='CircularStd-Medium'>
                    Change Region
                  </Link>
                  <LinkBox ml={1}>
                    <BottomArrow width={15} height={10} fill='#000000' />
                  </LinkBox>
                </b.Flex>
              </b.Box>
            </b.Flex>
            <b.Flex alignItems='center'>
              <b.Box mx={2}>
                <Twitter width={20} height={20} fill='#454545' />
              </b.Box>
              <b.Box mx={2}>
                <Facebook width={20} height={20} fill='#454545' />
              </b.Box>
              <b.Box mx={2}>
                <Youtube width={20} height={20} fill='#454545' />
              </b.Box>
              <b.Box mx={2}>
                <Linkedin width={20} height={20} fill='#454545' />
              </b.Box>
            </b.Flex>
          </b.Flex>
        </b.Container>
      </b.Box>
      <b.Box py={2} backgroundColor='#EBEAEB'>
        <b.Container>
          <b.Text fontSize={11}>
            © Copyright 2020 Slack Technologies, Inc. All rights reserved.
            Various trademarks held by their respective owners.
          </b.Text>
        </b.Container>
      </b.Box>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 50px 0 0 0;

  @media ${landing.lg} {
    padding-top: 80px;
  }

  @media ${landing.xl} {
    /* padding-top: 160px; */
    height: calc(100vh - 130px);
  }
`;

const Container = styled(b.Container)`
  padding-bottom: 50px;
`;

const LogoWrapper = styled(b.Box)`
  width: 100%;

  @media ${landing.lg} {
    width: 35%;
  }
`;

const ContentWrapper = styled(b.Flex)`
  display: block;
  @media ${landing.lg} {
    display: flex;
  }
`;

const SectionsWrapper = styled(b.Flex)`
  width: 100%;

  @media ${landing.lg} {
    width: 65%;
  }
`;

const Sections = styled(b.Flex)`
  @media ${landing.lg} {
    width: 50%;
  }
`;

const Section = styled(b.Box)`
  width: 50%;
`;

const Items = styled.ul`
  color: #767676;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  padding: 10px 0;
  font-size: 14px;
`;

const LinkBox = styled(b.Box)`
  cursor: pointer;

  &:hover {
    color: #1264a3;
  }
`;
