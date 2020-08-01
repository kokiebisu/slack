import styled from 'styled-components';
import * as b from 'global/blocks';

export const confirmVariants = {
  loading: {
    x: -10,
  },
  loaded: {
    x: 0,
  },
};

export const Wrapper = styled(b.Box)`
  max-width: 768px;
  width: 100%;
`;

export const IconWrapper = styled(b.Box)`
  position: relative;
  &.checkcircle {
    position: absolute;
    top: 50%;
    transform: translateY(-45%);
    right: 12px;
    svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }
  &.warning {
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.pink};
      }
      rect {
        fill: ${({ theme }) => theme.colors.pink};
      }
    }
  }
`;
