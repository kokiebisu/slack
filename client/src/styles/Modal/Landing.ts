import * as b from 'global/blocks';
import styled from 'styled-components';

import { size } from 'global/sizes';

export const Wrapper = styled(b.Box)`
  background-color: white;
  position: absolute;
  z-index: 200;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .header {
    padding: 25px;
    margin-bottom: 7px;
  }
  .content {
    padding-right: 5px;
  }
`;

export const IconWrapper = styled(b.Box)`
  &.logo {
    svg {
      width: 100px;
      height: auto;

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
  &.arrow {
    svg {
      width: 10px;
    }
  }
`;

export const IconButtonWrapper = styled(b.Button)`
  &.close {
    svg {
      width: 14px;
    }
  }
`;

export const Option = styled(b.Box)`
  padding: 17px 25px;
  p {
    font-family: 'SlackLato-Regular';
    font-size: 17px;
  }
`;

export const Buttons = styled(b.Box)`
  position: fixed;
  bottom: 10px;
  width: 100%;

  & > div {
    display: block;
    padding: 15px;
    @media ${size.md} {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 10px;
    }
  }
`;

export const Button = styled(b.Box)`
  & > button {
    font-size: 14px;
    font-family: 'CircularPro-Bold';

    letter-spacing: 1px;
    width: 100%;
    padding: 20px 0;
    text-transform: uppercase;
    height: 60px;
    @media ${size.lg} {
      width: auto;
      padding: 0 40px;
    }
  }
  &.button__filled {
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.primary};
    & > button {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &.button__border {
    border-radius: 6px;
    margin-top: 15px;
    margin-left: 0px;
    @media ${size.md} {
      margin-top: 0;
      margin-left: 15px;
    }
    & > button {
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.primary__light};
      color: ${({ theme }) => theme.colors.primary__light};
    }
  }
`;
