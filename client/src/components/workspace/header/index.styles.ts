import styled from 'styled-components';
import * as b from '../../../styles/blocks';

// Breakpoints
import { home } from '../../../styles/sizes';

export const Input = styled(b.Button)`
  height: 24px;
  border: 1.3px solid ${({ theme }) => theme.colors.purple};
  padding: 0 8px;
  width: 320px;
  background-color: ${({ theme }) => theme.colors.primary__lighter};
  color: ${({ theme }) => theme.colors.white__dark};
  fill: ${({ theme }) => theme.colors.white__dark};

  @media ${home.lg} {
    width: 500px;
  }

  &:hover {
    border: 1.3px solid ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white__dark};
    fill: ${({ theme }) => theme.colors.white__dark};
  }
`;

export const IconWrapper = styled(b.Box)`
  position: relative;

  &.info {
    top: 2px;
    svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }

  &.clock {
    border-radius: 5px;
    padding: 6px 6px 3px 7px;
    svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary__lighter};
    }
  }
  &.magnify {
    svg {
      width: 12px;
      height: 12px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }

  &.present {
    top: 1px;
    svg {
      width: 14px;
      height: 14px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
