import styled, { keyframes } from 'styled-components';
import * as b from '../../../../../styles/blocks';

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
