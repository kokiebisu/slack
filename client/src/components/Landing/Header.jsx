import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Blocks
import { Box, Container, Flex, Text, device } from '../../styles/Blocks';

// Svg
import { SlackLogo } from '../../assets/svg/Logo';
import { BottomArrow } from '../../assets/svg/Arrows';
import { HamburgerButton } from '../../assets/svg/Buttons';

export const Header = () => {
  const [hovered, setHovered] = useState({
    why: false,
    solutions: false,
    resources: false,
    enterprise: false,
    pricing: false,
  });

  return (
    <Wrapper>
      <Container>
        <Flex alignItems='center' justifyContent='space-between'>
          <Left alignItems='center'>
            <Box top={2} mr={4}>
              <SlackLogo width={100} height={60} />
            </Box>
          </Left>
          <Right justifyContent='space-between' alignItems='center'>
            <Nav>
              <NavItem>
                <motion.div
                  onHoverStart={() => setHovered({ ...hovered, why: true })}
                  onHoverEnd={() => setHovered({ ...hovered, why: false })}>
                  <Text>Why Slack?</Text>
                </motion.div>
                {hovered.why ? (
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
              <NavItem>
                <motion.div
                  onHoverStart={() =>
                    setHovered({ ...hovered, solutions: true })
                  }
                  onHoverEnd={() =>
                    setHovered({ ...hovered, solutions: false })
                  }>
                  <Text>Solutions</Text>
                </motion.div>
                {hovered.solutions ? (
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
              <NavItem>
                <motion.div
                  onHoverStart={() =>
                    setHovered({ ...hovered, resources: true })
                  }
                  onHoverEnd={() =>
                    setHovered({ ...hovered, resources: false })
                  }>
                  <Text>Resources</Text>
                </motion.div>
                {hovered.resources ? (
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
                <Text>Enterprise</Text>
              </NavItem>
              <NavItem>
                <Text>Pricing</Text>
              </NavItem>
            </Nav>
            <LaunchButton>
              <Flex alignItems='center'>
                <Text>Launch Slack</Text>
                <Box ml={2}>
                  <BottomArrow height={10} width={10} />
                </Box>
              </Flex>
            </LaunchButton>
            <HamburgerWrapper>
              <HamburgerButton width={24} height={17} />
            </HamburgerWrapper>
          </Right>
        </Flex>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 70px;
  border-bottom: 0.5px solid #ebeaeb;
`;

const Left = styled(Flex)``;

const Right = styled(Flex)`
  flex-grow: 1;
  justify-content: flex-end;

  @media ${device.lg} {
    justify-content: space-between;
  }
`;

const Nav = styled.div`
  display: none;
  align-items: center;

  @media ${device.lg} {
    display: flex;
  }
`;

const NavItem = styled(motion.div)`
  position: relative;
  border: none;
  background-color: transparent;
  padding: 15px;
  font-size: 16px;
  font-family: 'CircularStd-Book';
  cursor: pointer;
`;

const LaunchButton = styled.button`
  display: none;
  padding: 13px 15px;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
  background-color: #612069;
  border: none;
  font-family: 'CircularStd-Medium';
  border-radius: 3px;
  letter-spacing: 1px;

  @media ${device.lg} {
    display: block;
  }
`;

const Dropdown = styled.div`
  width: 250px;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50px;
  padding: 13px 20px;
  border-radius: 5px;
`;

const LinkWrapper = styled.div`
  padding: 8px 0;
  display: flex;
`;

const Link = styled.a`
  text-transform: none;
`;

const HamburgerWrapper = styled.div`
  @media ${device.lg} {
    display: none;
  }
`;
