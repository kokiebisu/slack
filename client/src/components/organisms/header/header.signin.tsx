import * as React from "react";

// Blocks

// Svgs
import { NameLogo } from "assets/svg/Logo";

import styled from "styled-components";
import * as b from "global/blocks";

import { signin } from "global/sizes";

interface Props {}

export const SignInHeader: React.FC<Props> = () => {
  const navItems = [
    { name: "Product", url: "/product" },
    { name: "Pricing", url: "/pricing" },
    { name: "Support", url: "/support" },
    { name: "Create a new workspace", url: "/create" },
    { name: "Find your workspace", url: "/get-started" },
  ];

  return (
    <HeaderWrapper>
      <Wrapper>
        <b.Container signin>
          <b.Flex alignItems="center" justifyContent="space-between">
            <Left alignItems="center">
              <b.Anchor href="/">
                <b.Box top={2} mr={4}>
                  <IconWrapper className="namelogo">
                    <NameLogo />
                  </IconWrapper>
                </b.Box>
              </b.Anchor>
            </Left>
            <Right alignItems="center">
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
  border-radius: 6px;
  padding: 8px 10px;
  margin: 0px 3px;
  font-size: 15px;
  font-family: "SlackLato-Regular";
  color: ${({ theme }) => theme.colors.gray__dark};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white__dark};
  }
`;

const SignInItem = styled(b.Box)`
  border: 2px solid ${({ theme }) => theme.colors.gray__dark};
  padding: 8px 13px;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.gray__dark};
  margin-left: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
    border-color: ${({ theme }) => theme.colors.gray};
  }
`;

const IconWrapper = styled(b.Box)`
  &.namelogo {
    svg {
      width: 105px;
      height: 60px;
      path {
        &:nth-child(2) {
          fill: ${({ theme }) => theme.colors.blue__lighter};
        }
        &:nth-child(3) {
          fill: ${({ theme }) => theme.colors.green__lighter};
        }
        &:nth-child(4) {
          fill: ${({ theme }) => theme.colors.yellow};
        }
        &:nth-child(5) {
          fill: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }
`;
