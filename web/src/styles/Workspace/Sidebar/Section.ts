import styled from "styled-components";
import * as b from "global/blocks";

// Sizes
import { home } from "global/sizes";

export const Wrapper = styled(b.Box)`
  padding: 10px 0;
  cursor: pointer;
`;

export const TopColumnWrapper = styled(b.Box)`
  width: 100%;
  height: 25px;
  padding: 0 18px 0 20px;

  &:focus {
    outline: 0;
  }
`;

export const TitleWrapper = styled(b.Flex)`
  position: relative;
`;

export const TitleContainer = styled(b.Button)`
  position: relative;
  bottom: 2px;
  padding-right: 60px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const IconButtonWrapper = styled(b.Button)`
  &.plus {
    position: absolute;
    right: -2px;
    bottom: 3px;
    border-radius: 5px;
    padding: 6px 8px 4px 7px;
    svg {
      width: 14px;
      height: 14px;
      path {
        fill: ${({ theme }) => theme.colors.pink__light};
      }
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primary__lighter};
    }
  }

  &.smallplus {
    svg {
      position: relative;
      bottom: 3px;
      width: 8px;
      height: 8px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const IconWrapper = styled(b.AnimatedBox)`
  position: relative;

  &.play {
    bottom: 6px;
    svg {
      width: 8px;
      height: 8px;
      path {
        fill: ${({ theme }) => theme.colors.pink__lighter};
      }
    }
  }

  &.close {
    display: none;
    bottom: 3px;
    right: 7px;
    svg {
      width: 12px;
      height: 12px;
      path {
        fill: ${({ theme }) => theme.colors.purple};
      }
    }

    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }

    @media ${home.lg} {
      bottom: 2px;
      right: 18px;
    }
  }

  &.smallplus {
    bottom: 2.75px;

    svg {
      width: 8px;
      height: 8px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const SubtitleWrapper = styled(b.Box)`
  padding: 7px 19px 3px 28.5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary__dark};

    div.close {
      display: block;
    }
  }
`;
