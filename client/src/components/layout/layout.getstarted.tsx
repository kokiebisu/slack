import * as React from "react";
import * as b from "global/blocks";
// Svg
import { Globe, NameLogo } from "assets/svg";

import styled from "styled-components";

import { getstarted, size } from "global/sizes";
import { Footer } from "components/organisms/footer/footer.component";

export const GetStartedLayout: React.FC<{
  content?: any;
  title?: string;
  subtitle?: string;
}> = ({ content = "Content", title, subtitle }) => {
  return (
    <Wrapper>
      <b.Container>
        <b.Box>
          <b.Flex justifyContent="center">
            <IconWrapper className="namelogo">
              <NameLogo />
            </IconWrapper>
          </b.Flex>
          {title && (
            <b.Box>
              <b.Text
                fontSize={48}
                color="black__light"
                fontFamily="Larsseit-Bold"
                textAlign="center"
              >
                {title}
              </b.Text>
            </b.Box>
          )}
          {subtitle && (
            <b.Box pt={2} pb={4}>
              <b.Text
                lineHeight={1.5}
                textAlign="center"
                color="gray"
                fontFamily="SlackLato-Regular"
                fontSize={20}
              >
                Enter the email you usually collaborate with
              </b.Text>
            </b.Box>
          )}
        </b.Box>
      </b.Container>
      <b.Box px={4}>
        <b.Flex justifyContent="center">{content}</b.Flex>
      </b.Box>
      <b.Box py={4}>
        <Footer variant="getstarted" />
      </b.Box>
    </Wrapper>
  );
};

const IconWrapper = styled(b.Box)`
  position: relative;
  &.namelogo {
    padding: 5px;
    svg {
      width: 140px;
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

  &.boldplus {
    svg {
      width: 13px;
      height: 13px;
      path {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  &.globe {
    top: 0.5px;
    svg {
      width: 12px;
      height: 12px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

const Wrapper = styled(b.Box)`
  padding: 30px 0;
`;

const SelectOptionWrapper = styled(b.Box)``;

const SelectOptionContainer = styled(b.Box)`
  max-width: 780px;

  width: 100%;

  border-radius: 5px;

  & > div {
    display: block;

    @media ${getstarted.xs} {
      display: flex;
    }
  }
`;

const SelectOptionInner = styled(b.Box)`
  height: 100%;

  &.left {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &.right {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  @media ${size.xs} {
    &.left {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border-top-right-radius: 0px;
    }

    &.right {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 0px;
    }
  }
`;

const SelectOption = styled(b.Box)`
  width: 100%;

  &.right {
    border: 0.5px solid lightgray;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  @media ${size.xs} {
    width: 50%;

    &.right {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 0px;
    }
  }
`;

const SignInButton = styled(b.Box)`
  position: relative;
  bottom: 1px;
  border: 0.5px solid ${({ theme }) => theme.colors.gray__light};
  padding: 16px;
  border-radius: 5px;
`;

const WhatIsSlackWrapper = styled(b.Box)``;

const WhatIsSlackContainer = styled(b.Box)`
  width: 100%;
  max-width: 550px;
`;

const FooterLink = styled(b.Anchor)`
  font-size: 14px;
  font-family: "SlackLato-Regular";
  color: ${({ theme }) => theme.colors.gray};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;

const ChangeRegion = styled(b.Button)`
  font-size: 14px;
  font-family: "SlackLato-Regular";
  color: ${({ theme }) => theme.colors.gray__light};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;

const Image = styled(b.Box)`
  &.workspace {
    display: none;
    @media ${size.sm} {
      display: block;
    }
  }
`;
