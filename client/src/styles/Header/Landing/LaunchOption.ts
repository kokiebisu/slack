import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Anchor)`
  & > div {
    padding: 15px;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.white__dark};
  }
`;

export const Name = styled(b.Box)`
  & > p {
    color: #1d1d1d;

    &.hovered {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const Avatar = styled(b.Box)`
  & > div {
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
`;

export const AvatarLetter = styled(b.Box)`
  & > p {
    color: ${({ theme }) => theme.colors.white};
    font-family: 'SlackLato-Bold';
    font-size: 18px;
  }
`;

export const IconWrapper = styled(b.Box)`
  svg {
    width: 15px;
    height: 15px;
    path {
      fill: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const launchArrow = {
  initial: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    x: 5,
    transition: {
      duration: 0.5,
    },
  },
};
