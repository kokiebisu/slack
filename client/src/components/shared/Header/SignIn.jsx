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
              <LargeNav>
                <NavItem>
                  <b.Text>Product</b.Text>
                </NavItem>
                <NavItem>
                  <b.Text>Pricing</b.Text>
                </NavItem>
                <NavItem>
                  <b.Text>Support</b.Text>
                </NavItem>
                <NavItem>
                  <b.Text>Create a new workspace</b.Text>
                </NavItem>
                <NavItem>
                  <b.Text>Find your workspace</b.Text>
                </NavItem>
                <SignInItem>
                  <b.Text>Sign in</b.Text>
                </SignInItem>
              </LargeNav>
              <SmallNav>
                <NavItem>
                  <b.Text>Download Slack</b.Text>
                </NavItem>
                <SignInItem>
                  <b.Text>Menu</b.Text>
                </SignInItem>
              </SmallNav>
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

const LargeNav = styled(b.Box)`
  display: none;

  @media ${signin.md} {
    display: flex;
    align-items: center;
  }
`;

const SmallNav = styled(b.Box)`
  display: flex;
  align-items: center;

  @media ${signin.md} {
    display: none;
  }
`;

const NavItem = styled(b.Anchor)`
  border: none;
  padding: 12px 0px;
  margin: 0px 12px;
  font-size: 15px;
  font-family: 'SlackLato-Regular';
  color: #848384;
`;

const SignInItem = styled(b.Box)`
  border: 2px solid #838283;
  padding: 8px 13px;
  border-radius: 3px;
  color: #848384;
  margin-left: 10px;
`;
