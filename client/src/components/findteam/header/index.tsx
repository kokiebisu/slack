import * as React from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../../styles/blocks';

// Svgs
import { NameLogo } from '../../../assets/svg/Logo';

// Breakpoints
import { signin } from '../../../styles/sizes';

// Styles
import {
  HeaderWrapper,
  Wrapper,
  Left,
  Right,
  LargeNav,
  SmallNav,
  NavItem,
  SignInItem,
  IconWrapper,
} from './index.styles';

interface Props {}

export const Header: React.FC<Props> = () => {
  const navItems = [
    { name: 'Product', url: '/product' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Support', url: '/support' },
    { name: 'Create a new workspace', url: '/create' },
    { name: 'Find your workspace', url: '/get-started' },
  ];

  return (
    <HeaderWrapper>
      <Wrapper>
        <b.Container signin>
          <b.Flex alignItems='center' justifyContent='space-between'>
            <Left alignItems='center'>
              <b.Anchor href='/'>
                <b.Box top={2} mr={4}>
                  <IconWrapper className='namelogo'>
                    <NameLogo />
                  </IconWrapper>
                </b.Box>
              </b.Anchor>
            </Left>
            <Right alignItems='center'>
              <LargeNav>
                {navItems.map((navItem, index) => {
                  return (
                    <NavItem href={navItem.url} key={index}>
                      <b.Text>{navItem.name}</b.Text>
                    </NavItem>
                  );
                })}
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
