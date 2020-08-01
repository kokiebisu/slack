import styled from 'styled-components';
import * as b from 'styles/blocks';

import { size } from 'styles/sizes';

export const Wrapper = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.white__dark};
  border-top: 1px solid ${({ theme }) => theme.colors.gray__lighter};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  height: 39px;

  & div {
    &.container {
      width: 100%;
      padding: 5px;
    }
  }
`;

export const IconWrapper = styled(b.Button)`
  width: 32px;
  height: 32px;
  border-radius: 5px;

  & path {
    fill: ${({ theme }) => theme.colors.gray__light};
  }

  & svg {
    position: relative;
    right: 1px;
    width: 13px;
    height: 13px;
  }

  &.bolt {
    & svg {
      width: 16px;
      height: 16px;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray__lighter};
  }

  &.bold {
    display: none;
    @media ${size['14xs']} {
      display: block;
    }
    @media ${size['9xs']} {
      display: none;
    }
    @media ${size['8xs']} {
      display: block;
    }
  }

  &.italic {
    display: none;
    @media ${size['13xs']} {
      display: block;
    }
    @media ${size['9xs']} {
      display: none;
    }
    @media ${size['7xs']} {
      display: block;
    }
  }

  &.strike_through {
    display: none;
    @media ${size['12xs']} {
      display: block;
    }
    @media ${size['9xs']} {
      display: none;
    }
    @media ${size['6xs']} {
      display: block;
    }
  }

  &.code {
    display: none;
    @media ${size['11xs']} {
      display: block;
    }

    @media ${size['9xs']} {
      display: none;
    }
    @media ${size['5xs']} {
      display: block;
    }
  }

  &.link {
    display: none;
    @media ${size['10xs']} {
      display: block;
    }

    @media ${size['9xs']} {
      display: none;
    }

    @media ${size['4xs']} {
      display: block;
    }
  }

  &.list_ol {
    display: none;
    @media ${size['3xs']} {
      display: block;
    }
  }

  &.list_ul {
    display: none;
    @media ${size['2xs']} {
      display: block;
    }
  }

  &.indent {
    display: none;
    @media ${size['xs']} {
      display: block;
    }
  }

  &.code_block {
    display: none;
    @media ${size['sm']} {
      display: block;
    }
  }

  &.more {
    @media ${size['sm']} {
      display: none;
    }
  }

  &.paper_plane {
    border-radius: 3px;
    & svg {
      width: 17px;
      height: 17px;
      polygon {
        fill: ${({ theme }) => theme.colors.gray__lighter};
      }
      circle {
        fill: ${({ theme }) => theme.colors.gray__lighter};
      }
    }
    &:disabled {
      polygon {
        fill: ${({ theme }) => theme.colors.white};
      }
      circle {
        fill: ${({ theme }) => theme.colors.white};
      }
    }

    &:focus {
      outline: none;
    }
  }
`;

export const Seperator = styled(b.Box)`
  width: 1px;
  height: 20px;
  margin: 0 3px;
  background-color: ${({ theme }) => theme.colors.gray__lighter};
`;
