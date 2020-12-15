import React, { useContext } from "react";

// Blocks
import * as b from "global/blocks";

// Svgs
import { NameLogo } from "assets/svg/Logo";

import styled, { ThemeContext } from "styled-components";

import { size } from "global/sizes";

export const FindHeader: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  const navItems = [
    { name: "Product", url: "/product" },
    { name: "Pricing", url: "/pricing" },
    { name: "Support", url: "/support" },
    { name: "Create a new workspace", url: "/create" },
    { name: "Find your workspace", url: "/get-started" },
  ];

  return (
    <b.Box position="sticky" top="0" zIndex={99}>
      <b.Box
        backgroundColor={theme.colors.white}
        height={70}
        borderBottom="0.5px solid"
        borderColor={theme.colors.gray__light}
        boxShadow="0 1px 1px rgba(0, 0, 0, 0.15)"
      >
        <b.Container signin>
          <b.Flex alignItems="center" justifyContent="space-between">
            <b.Flex alignItems="center">
              <b.Anchor href="/">
                <b.Box top={2} mr={4}>
                  <IconWrapper className="namelogo">
                    <NameLogo width={105} height={60} />
                  </IconWrapper>
                </b.Box>
              </b.Anchor>
            </b.Flex>
            <b.Flex flexGrow={1} justifyContent="flex-end" alignItems="center">
              <LargeNav>
                {navItems.map((navItem, index) => {
                  return (
                    <div key={index}>
                      <NavItem
                        color={theme.colors.gray__dark}
                        border="none"
                        fontSize={15}
                        fontFamily="SlackLato-Regular"
                        borderRadius={6}
                        py={2}
                        px={3}
                        mx={1}
                        href={navItem.url}
                      >
                        <b.Text>{navItem.name}</b.Text>
                      </NavItem>
                    </div>
                  );
                })}
                <SignInItem>
                  <b.Text>Sign in</b.Text>
                </SignInItem>
              </LargeNav>
              <SmallNav>
                <NavItem
                  color={theme.colors.gray__dark}
                  border="none"
                  fontSize={15}
                  fontFamily="SlackLato-Regular"
                  borderRadius={6}
                  py={2}
                  px={3}
                  mx={1}
                >
                  <b.Text>Download Slack</b.Text>
                </NavItem>
                <SignInItem
                  py={2}
                  px={3}
                  borderRadius={3}
                  ml={3}
                  border="2px solid"
                  borderColor={theme.colros.gray__dark}
                >
                  <b.Text>Menu</b.Text>
                </SignInItem>
              </SmallNav>
            </b.Flex>
          </b.Flex>
        </b.Container>
      </b.Box>
    </b.Box>
  );
};

const LargeNav = styled(b.Box)`
  display: none;

  @media ${size.md} {
    display: flex;
    align-items: center;
  }
`;

const SmallNav = styled(b.Box)`
  display: none;

  @media ${size.xs} {
    display: flex;
    align-items: center;
  }

  @media ${size.md} {
    display: none;
  }
`;

const NavItem = styled(b.Anchor)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.white__dark};
  }
`;

const SignInItem = styled(b.Box)`
  &:hover {
    color: ${({ theme }) => theme.colors.gray};
    border-color: ${({ theme }) => theme.colors.gray};
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
