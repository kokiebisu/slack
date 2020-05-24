import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Global Styles
import { Box, Anchor, Container, Flex, Text } from '../../styles/blocks';
import { landing } from '../../styles/sizes';

// Svg
import { HeaderLogo } from '../../assets/svg/Logo';
import { BottomArrow } from '../../assets/svg/Arrows';
import { HamburgerButton } from '../../assets/svg/Buttons';

// Components
import { Link } from './Landing.styles';

export const Header = () => {
  const [hovered, setHovered] = useState({
    why: false,
    solutions: false,
    resources: false,
    enterprise: false,
    pricing: false,
  });

  return (
    <HeaderWrapper>
      <Wrapper>
        <Container>
          <Flex alignItems='center' justifyContent='space-between'>
            <Left alignItems='center'>
              <Box top={2} mr={4}>
                <HeaderLogo width={100} height={60} />
              </Box>
            </Left>
            <Right justifyContent='space-between' alignItems='center'>
              <Nav>
                <NavItem
                  onHoverStart={() => {
                    setHovered({ ...hovered, why: true });
                  }}
                  onHoverEnd={() => {
                    setHovered({ ...hovered, why: false });
                  }}>
                  <Text>Why Slack?</Text>
                  {!hovered.solutions && hovered.why ? (
                    <Dropdown>
                      <LinkWrapper>
                        <Link>Features</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>How it replaces email</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Security</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Customers</Link>
                      </LinkWrapper>
                    </Dropdown>
                  ) : null}
                </NavItem>
                <NavItem
                  onHoverStart={() => {
                    setHovered({ ...hovered, solutions: true });
                  }}
                  onHoverEnd={() => {
                    setHovered({ ...hovered, solutions: false });
                  }}>
                  <Text>Solutions</Text>
                  {!hovered.resources && hovered.solutions ? (
                    <Dropdown>
                      <LinkWrapper>
                        <Link>Remote Work</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Distance Learning</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Engineering</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Financial Services</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Sales</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>IT</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Marketing</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Customer Support</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Human Resources</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Project Management</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Media</Link>
                      </LinkWrapper>
                    </Dropdown>
                  ) : null}
                </NavItem>
                <NavItem
                  onHoverStart={() =>
                    setHovered({ ...hovered, resources: true })
                  }
                  onHoverEnd={() =>
                    setHovered({ ...hovered, resources: false })
                  }>
                  <Text>Resources</Text>
                  {!hovered.why && hovered.resources ? (
                    <Dropdown>
                      <LinkWrapper>
                        <Link>Resources Library</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Slack Tips</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Blog</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Webinars</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Slack Certified Program</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Help Center</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>API</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>App Directory</Link>
                      </LinkWrapper>
                      <LinkWrapper>
                        <Link>Download</Link>
                      </LinkWrapper>
                    </Dropdown>
                  ) : null}
                </NavItem>
                <NavItem>
                  <Link>Enterprise</Link>
                </NavItem>
                <NavItem>
                  <Link>Pricing</Link>
                </NavItem>
              </Nav>
              <LaunchButtonWrapper
                href='/client'
                initial='rest'
                whileHover='hovered'
                animate='rest'>
                <LaunchButton variants={launchMotion}>
                  <Flex alignItems='center'>
                    <Text>Launch Slack</Text>
                    <Box ml={2}>
                      <BottomArrow height={10} width={10} fill='#ffffff' />
                    </Box>
                  </Flex>
                </LaunchButton>
              </LaunchButtonWrapper>
              <HamburgerWrapper>
                <HamburgerButton width={24} height={17} />
              </HamburgerWrapper>
            </Right>
          </Flex>
        </Container>
      </Wrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
`;

const Wrapper = styled.div`
  background-color: white;
  height: 70px;
  border-bottom: 0.5px solid lightgray;
`;

const Left = styled(Flex)``;

const Right = styled(Flex)`
  flex-grow: 1;
  justify-content: flex-end;

  @media ${landing.lg} {
    justify-content: space-between;
  }
`;

const Nav = styled.div`
  display: none;
  align-items: center;

  @media ${landing.lg} {
    display: flex;
  }
`;

const NavItem = styled(motion.div)`
  position: relative;
  border: none;
  background-color: transparent;
  padding: 12px 0px;
  margin: 0px 15px;
  font-size: 16px;
  font-family: 'CircularStd-Book';
  cursor: pointer;
`;

const LaunchButtonWrapper = styled(Anchor)``;

const LaunchButton = styled(Anchor)`
  display: none;
  padding: 13px 15px;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
  border: none;
  font-family: 'CircularStd-Medium';
  border-radius: 3px;
  letter-spacing: 1px;
  cursor: pointer;

  @media ${landing.lg} {
    display: block;
  }
`;

const Dropdown = styled.div`
  width: 250px;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 45px;
  padding: 13px 20px;
  border-radius: 5px;
`;

const LinkWrapper = styled.div`
  padding: 8px 0;
  display: flex;
`;

const HamburgerWrapper = styled.div`
  @media ${landing.lg} {
    display: none;
  }
`;

// Motion

const launchMotion = {
  rest: {
    backgroundColor: '#612069',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hovered: {
    backgroundColor: '#18071A',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};
