import React from 'react';
import styled from 'styled-components';

// Sizes
import { landing } from '../../styles/sizes';

// SVG
import { FooterLogo } from '../../assets/svg/Logo';

import * as b from '../../styles/blocks';

export const Footer = () => {
  return (
    <Wrapper>
      <b.Container>
        <b.Flex>
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
                    <b.Text>Features</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Enterprise</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Security</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Customer Stories</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Pricing</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Slack Demo</b.Text>
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
                    Product
                  </b.Text>
                </b.Box>
                <Items>
                  <Item>
                    <b.Text>Features</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Enterprise</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Security</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Customer Stories</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Pricing</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Slack Demo</b.Text>
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
                    Product
                  </b.Text>
                </b.Box>
                <Items>
                  <Item>
                    <b.Text>Features</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Enterprise</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Security</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Customer Stories</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Pricing</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Slack Demo</b.Text>
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
                    Product
                  </b.Text>
                </b.Box>
                <Items>
                  <Item>
                    <b.Text>Features</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Enterprise</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Security</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Customer Stories</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Pricing</b.Text>
                  </Item>
                  <Item>
                    <b.Text>Slack Demo</b.Text>
                  </Item>
                </Items>
              </Section>
            </Sections>
          </SectionsWrapper>
        </b.Flex>
      </b.Container>
      <b.Box py={4} backgroundColor='#F5F5F5'>
        <b.Container>
          <b.Flex>
            <b.Box>
              <b.Text>Status</b.Text>
            </b.Box>
            <b.Box>
              <b.Text>Status</b.Text>
            </b.Box>
            <b.Box>
              <b.Text>Status</b.Text>
            </b.Box>
            <b.Box>
              <b.Text>Status</b.Text>
            </b.Box>
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
  padding: 50px 0;

  @media ${landing.lg} {
    padding-top: 80px;
  }

  @media ${landing.xl} {
    /* padding-top: 160px; */
    height: calc(100vh - 130px);
  }
`;

const LogoWrapper = styled(b.Box)`
  width: 100%;

  @media ${landing.lg} {
    width: 35%;
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
`;

const Item = styled.li`
  padding: 10px 0;
  font-size: 14px;
`;
