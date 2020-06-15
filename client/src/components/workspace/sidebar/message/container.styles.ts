import styled from 'styled-components';
import * as b from '../../../../styles/blocks';

export const IconWrapper = styled(b.Box)`
  position: relative;
  &.heart {
    top: 1.5px;

    svg {
      width: 10px;
      height: 10px;
      path {
        fill: ${({ theme }) => theme.colors.green__lighter};
      }
    }
  }
`;

export const SlackBot = styled(b.Box)`
  padding: 5px 0px 5px 23px;
`;
