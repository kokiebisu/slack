import React, { useContext } from "react";

// Blocks

// Svgs
import { NameLogo } from "assets/svg/Logo";

import styled, { ThemeContext } from "styled-components";
import * as b from "global/blocks";

import { signin } from "global/sizes";
import { Button } from "components/atoms/button";

export const SignInHeader: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  const navItems = [
    { name: "Product", url: "/product" },
    { name: "Pricing", url: "/pricing" },
    { name: "Support", url: "/support" },
    { name: "Create a new workspace", url: "/create" },
    { name: "Find your workspace", url: "/get-started" },
  ];

  return (
    <b.Box
      py={2}
      borderBottom="0.5px solid"
      boxShadow="0 1px 1px rgba(0, 0, 0, 0.15)"
      backgroundColor={theme.colors.white}
      borderColor={theme.colors.white__darker}
    >
      <b.Container signin>
        <b.Flex alignItems="center" justifyContent="space-between">
          <b.Flex alignItems="center">
            <b.Anchor href="/">
              <b.Box mr={4}>
                <IconWrapper>
                  <NameLogo width={105} height={60} />
                </IconWrapper>
              </b.Box>
            </b.Anchor>
          </b.Flex>
          <b.Flex flexGrow={1} justifyContent="flex-end" alignItems="center">
            <LargeNav>
              {navItems.map((navItem, index) => {
                return (
                  <NavItem href={navItem.url} key={index}>
                    <b.Text>{navItem.name}</b.Text>
                  </NavItem>
                );
              })}
              {/* <SignInItem>
                <b.Text>Sign in</b.Text>
              </SignInItem> */}
              <Button variant="square" title="Sign in" />
            </LargeNav>
            <SmallNav>
              <NavItem>
                <b.Text>Download Slack</b.Text>
              </NavItem>
              <Button variant="square" title="Menu" />
              {/* <SignInItem>
                <b.Text>Menu</b.Text>
              </SignInItem> */}
            </SmallNav>
          </b.Flex>
        </b.Flex>
      </b.Container>
    </b.Box>
  );
};

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

const IconWrapper = styled(b.Box)`
  svg {
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
`;
