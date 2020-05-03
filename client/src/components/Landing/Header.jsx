import React from 'react';
import styled from 'styled-components';

// Blocks
import { Box, Container, Flex, Text, device } from '../../styles/Blocks';

// Svg
import { SlackLogo } from '../../assets/svg/Logo';
import { BottomArrow } from '../../assets/svg/Arrows';
import { HamburgerButton } from '../../assets/svg/Buttons';

export const Header = () => {
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
                <Text>Why Slack?</Text>
              </NavItem>
              <NavItem>
                <Text>Solutions</Text>
              </NavItem>
              <NavItem>
                <Text>Resources</Text>
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

const NavItem = styled.div`
  padding: 15px;
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

const HamburgerWrapper = styled.div`
  @media ${device.lg} {
    display: none;
  }
`;
