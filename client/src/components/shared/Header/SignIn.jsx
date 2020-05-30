import React from 'react';
import styled from 'styled-components';

import * as b from '../../../styles/blocks';

import { HeaderLogo } from '../../../assets/svg/Logo';
import { HamburgerButton } from '../../../assets/svg/Buttons';

import { signin } from '../../../styles/sizes';

export const SignInHeader = () => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <b.Container signin>
          <b.Flex alignItems='center' justifyContent='space-between'>
            <Left alignItems='center'>
              <b.Box top={2} mr={4}>
                <HeaderLogo width={105} height={60} />
              </b.Box>
            </Left>
            <Right alignItems='center'>
              <Nav>
                <NavItem>
                  <b.Text>Why Slack?</b.Text>
                </NavItem>
                <NavItem>
                  <b.Text>Solutions</b.Text>
                </NavItem>
                <NavItem>
                  <b.Text>Resources</b.Text>
                </NavItem>
              </Nav>
              <HamburgerWrapper>
                <HamburgerButton width={24} height={17} />
              </HamburgerWrapper>
            </Right>
          </b.Flex>
        </b.Container>
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
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
`;

const Left = styled(b.Flex)``;

const Right = styled(b.Flex)`
  flex-grow: 1;
  justify-content: flex-end;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
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

const HamburgerWrapper = styled.div`
  @media ${signin.sm} {
    display: none;
  }
`;
