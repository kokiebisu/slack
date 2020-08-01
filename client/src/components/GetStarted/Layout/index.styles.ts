import styled from 'styled-components';
import * as b from 'styles/blocks';

import { getstarted, size } from 'styles/sizes';

export const Wrapper = styled(b.Box)`
  padding: 30px 0;
`;

export const IconWrapper = styled(b.Box)`
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

export const SelectOptionWrapper = styled(b.Box)``;

export const SelectOptionContainer = styled(b.Box)`
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

export const SelectOptionInner = styled(b.Box)`
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

export const SelectOption = styled(b.Box)`
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

export const SignInButton = styled(b.Box)`
  position: relative;
  bottom: 1px;
  border: 0.5px solid ${({ theme }) => theme.colors.gray__light};
  padding: 16px;
  border-radius: 5px;
`;

export const WhatIsSlackWrapper = styled(b.Box)``;

export const WhatIsSlackContainer = styled(b.Box)`
  width: 100%;
  max-width: 550px;
`;

export const FooterLink = styled(b.Anchor)`
  font-size: 14px;
  font-family: 'SlackLato-Regular';
  color: ${({ theme }) => theme.colors.gray};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;

export const ChangeRegion = styled(b.Button)`
  font-size: 14px;
  font-family: 'SlackLato-Regular';
  color: ${({ theme }) => theme.colors.gray__light};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;

export const Image = styled(b.Box)`
  &.workspace {
    display: none;
    @media ${size.sm} {
      display: block;
    }
  }
`;
