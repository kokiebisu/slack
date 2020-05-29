import React, { useState } from 'react';
import styled from 'styled-components';

// Global Styles
import * as b from '../../styles/blocks';
import { landing } from '../../styles/sizes';

// Svg
import { HeaderLogo } from '../../assets/svg/Logo';
import { BottomArrow, RightArrow } from '../../assets/svg/Arrows';
import { HamburgerButton } from '../../assets/svg/Buttons';

// Images
import BCIT from '../../assets/img/bcit.png';

// Components
import { Link } from './Landing.styles';

export const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [hovered, setHovered] = useState({
    why: false,
    solutions: false,
    resources: false,
    enterprise: false,
    pricing: false,
    launch: false,
  });

  const [pressed, setPressed] = useState(false);

  return (
    <HeaderWrapper>
      <Wrapper>
        <b.Container>
          <b.Flex alignItems='center' justifyContent='space-between'>
            <Left alignItems='center'>
              <b.Box top={2} mr={4}>
                <HeaderLogo width={100} height={60} />
              </b.Box>
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
                  <b.Text>Why Slack?</b.Text>
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
                  <b.Text>Solutions</b.Text>
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
                  <b.Text>Resources</b.Text>
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
              {loggedIn ? (
                <LaunchButtonWrapper
                  initial='rest'
                  whileHover='hovered'
                  animate='rest'
                  onClick={() => setPressed(!pressed)}>
                  <LaunchButton variants={launchMotion}>
                    <b.Flex alignItems='center'>
                      <b.Text>Launch Slack</b.Text>
                      <b.Box ml={2}>
                        <BottomArrow height={10} width={10} fill='#ffffff' />
                      </b.Box>
                    </b.Flex>
                  </LaunchButton>
                </LaunchButtonWrapper>
              ) : (
                <GetStartedButtonWrapper alignItems='center'>
                  <b.Box mr={3}>
                    <b.Text fontFamily='CircularPro-Book'>Sign in</b.Text>
                  </b.Box>
                  <GetStartedButton>
                    <b.Text
                      fontSize={14}
                      fontFamily='CircularPro-Book'
                      color='white'
                      uppercase>
                      Get Started
                    </b.Text>
                  </GetStartedButton>
                </GetStartedButtonWrapper>
              )}
              <HamburgerWrapper>
                <HamburgerButton width={24} height={17} />
              </HamburgerWrapper>
            </Right>
          </b.Flex>
          {pressed ? (
            <LaunchOptionWrapper>
              <LaunchOption>
                <b.Anchor href='/client'>
                  <b.Box
                    onMouseEnter={() => {
                      setHovered({ ...hovered, launch: true });
                    }}
                    onMouseLeave={() => {
                      setHovered({ ...hovered, launch: false });
                    }}
                    href='/client'
                    pb={2}
                    px={2}
                    style={{ borderBottom: '0.5px solid #E2E1E2' }}>
                    <b.Flex alignItems='center' justifyContent='space-between'>
                      <b.Box>
                        <b.Flex alignItems='center'>
                          <b.Box mr={3}>
                            <img
                              style={{ borderRadius: '5px' }}
                              width={50}
                              height={50}
                              src={BCIT}
                              alt='channel'
                            />
                          </b.Box>
                          <b.Box>
                            <TeamName
                              fontFamily='CircularPro-Bold'
                              fontSize={17}
                              className={hovered.launch ? `hovered` : ``}>
                              bcit-cst-sept-2018
                            </TeamName>
                          </b.Box>
                        </b.Flex>
                      </b.Box>
                      <b.Box
                        variants={launchArrow}
                        animate={hovered.launch ? 'animate' : 'initial'}>
                        <RightArrow width={15} height={15} color='#1766A4' />
                      </b.Box>
                    </b.Flex>
                  </b.Box>
                </b.Anchor>
                <b.Box pt={4} pb={3}>
                  <b.Box>
                    <LaunchOptionLink
                      href='/create-team'
                      color='#1264A3'
                      fontFamily='CircularPro-Book'>
                      <b.Text textAlign='center'>Create a new workspace</b.Text>
                    </LaunchOptionLink>
                  </b.Box>
                  <b.Box mt={3}>
                    <LaunchOptionLink
                      href='/signin-workspace'
                      color='#1264A3'
                      fontFamily='CircularPro-Book'>
                      <b.Text textAlign='center'>
                        Sign in to another workspace
                      </b.Text>
                    </LaunchOptionLink>
                  </b.Box>
                </b.Box>
              </LaunchOption>
            </LaunchOptionWrapper>
          ) : null}
        </b.Container>
      </Wrapper>
    </HeaderWrapper>
  );
};

const LaunchOptionWrapper = styled(b.Box)`
  display: none;

  @media ${landing.lg} {
    display: block;
    position: absolute;
    top: 80px;
    right: calc(5%);
    border-radius: 3px;
  }
`;

const LaunchOption = styled(b.Box)`
  padding: 10px;
  min-width: 380px;
  background-color: #ffffff;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
`;

const LaunchOptionLink = styled(b.Anchor)`
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
`;

const TeamName = styled(b.Text)`
  color: #1d1d1d;

  &.hovered {
    color: #1766a4;
  }
`;

const Wrapper = styled.div`
  background-color: white;
  height: 70px;
  border-bottom: 0.5px solid lightgray;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
`;

const Left = styled(b.Flex)``;

const Right = styled(b.Flex)`
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

const NavItem = styled(b.Box)`
  position: relative;
  border: none;
  background-color: transparent;
  padding: 12px 0px;
  margin: 0px 15px;
  font-size: 16px;
  font-family: 'CircularPro-Book';
  cursor: pointer;
`;

const LaunchButtonWrapper = styled(b.Box)``;

const LaunchButton = styled(b.Anchor)`
  display: none;
  padding: 13px 15px;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
  border: none;
  font-family: 'CircularPro-Bold';
  border-radius: 3px;
  letter-spacing: 1px;
  cursor: pointer;

  @media ${landing.lg} {
    display: block;
  }
`;

const GetStartedButtonWrapper = styled(b.Flex)`
  display: none;

  @media ${landing.lg} {
    display: flex;
  }
`;

const GetStartedButton = styled(b.Anchor)`
  letter-spacing: 0.1em;
  background-color: #611f69;
  border-radius: 5px;
  padding: 13px 13px;
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
    },
  },
  hovered: {
    backgroundColor: '#18071A',
    transition: {
      duration: 0.2,
    },
  },
};

const launchArrow = {
  initial: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    x: 5,
    transition: {
      duration: 0.5,
    },
  },
};
