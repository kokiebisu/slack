import styled from 'styled-components';
import * as b from '../../../../styles/blocks';

export const Name = styled(b.Box)`
  position: relative;
  top: 3px;
  & > p {
    font-family: 'SlackLato-Light';
    color: ${({ theme }) => theme.colors.pink__lighter};
    font-size: 15px;
  }
`;

export const IconWrapper = styled(b.Box)`
  position: relative;
  top: 3px;

  &.tag {
    svg {
      width: 12px;
      height: 12px;
      path {
        fill: ${({ theme }) => theme.colors.pink__lighter};
      }
    }
  }
`;
