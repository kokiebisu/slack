import styled from 'styled-components';
import * as b from '../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  height: 100%;
`;

export const Bottom = styled(b.Box)`
  max-width: 420px;
  text-align: center;
`;

export const SideOption = styled(b.Button)`
  padding: 8px 10px 6px 10px;
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white__dark};
    border-radius: 3px;
  }
`;

export const IconWrapper = styled(b.Box)`
  &.bookmark {
    svg {
      width: 26px;
      height: 26px;
      path {
        fill: ${({ theme }) => theme.colors.pink__dark};
      }
    }
  }

  &.transition {
    svg {
      width: 17px;
      height: 17px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;
