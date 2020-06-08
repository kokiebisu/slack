import styled from 'styled-components';
import * as b from '../../../styles/blocks';

export const TeamName = styled(b.Text)`
  color: #1d1d1d;

  &.hovered {
    color: ${({ theme }) => theme.colors.blue};
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
