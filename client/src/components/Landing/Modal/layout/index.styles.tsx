import * as b from '../../../../styles/blocks';
import styled from 'styled-components';

import { size } from '../../../../styles/sizes';

export const Wrapper = styled(b.Box)`
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

    &:focus {
      outline: none;
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
  bottom: 50px;
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
    border-radius: 3px;
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
    & > button {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &.button__border {
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
