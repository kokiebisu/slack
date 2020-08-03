import styled from 'styled-components';
import * as b from 'global/blocks';

export const IconWrapper = styled(b.Box)`
  &.sideoption {
    padding: 8px 10px 6px 10px;
    background-color: transparent;
    &:hover {
      background-color: ${({ theme }) => theme.colors.white__dark};
      border-radius: 3px;
    }

    svg {
      width: 17px;
      height: 17px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;
