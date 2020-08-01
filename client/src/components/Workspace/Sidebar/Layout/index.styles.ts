import styled from 'styled-components';
import * as b from 'styles/blocks';

import { size } from 'styles/sizes';

export const Wrapper = styled(b.Box)`
  display: none;

  & > div {
    &.profile {
      display: grid;
      padding: 10px 0;
      background-color: ${({ theme }) => theme.colors.primary};
      align-items: center;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary__lighter};
      z-index: 10;
      cursor: pointer;

      &.hovered {
        background-color: ${({ theme }) => theme.colors.primary__dark};
      }

      &:focus {
        outline: none;
      }
    }

    &.sidebar {
      position: relative;
      height: calc(100vh - 87px);
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 0 !important;
      }
    }
  }

  @media ${size['7xs']} {
    background-color: ${({ theme }) => theme.colors.primary};
    display: grid;
    grid-template-rows: 65px auto;
    position: relative;
    overflow: hidden;
  }
`;

export const IconWrapper = styled(b.Box)`
  .bottomarrow {
    svg {
      width: 8px;
      height: 8px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }

  &.write {
    svg {
      width: 16px;
      height: 16px;
      path {
        fill: ${({ theme }) => theme.colors.primary__lighter};
      }
    }
  }
`;
