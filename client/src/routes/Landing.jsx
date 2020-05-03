import React from 'react';
import styled from 'styled-components';

// // Components
// import { LandingHeader } from '../components/shared/Footer/Header/Landing';
// import { GetStartedFooter } from '../components/shared/Footer/GetStartedFooter';

// Blocks
import { Box, Container, Flex, Text, size, device } from '../styles/Blocks';

// Svg
import { SlackLogo } from '../assets/svg/Logo';

export default () => {
  return (
    <Wrapper>
      <Container>
        <Flex alignItems='center' justifyContent='space-between'>
          <Left alignItems='center'>
            <Box top={2} mr={4}>
              <SlackLogo width={100} height={60} />
            </Box>
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
          </Left>
          <Right>Launch Slack</Right>
        </Flex>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 70px;
`;

const Left = styled(Flex)`
  flex-grow: 1;
`;

const Right = styled.div`
  flex: none;
`;

const Nav = styled.div`
  display: none;
  align-items: center;

  @media ${device.lg} {
    display: flex;
  }
`;

const NavItem = styled.div`
  background-color: blue;
  padding: 20px 20px;
  margin: 0px 5px;
`;

// const TempContent = styled.div`
//   background-color: gray;
//   width: 100vw;
//   height: 60vh;
// `;
