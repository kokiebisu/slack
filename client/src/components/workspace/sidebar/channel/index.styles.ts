import styled from 'styled-components';
import * as b from '../../../../styles/blocks';

export const Name = styled(b.Box)`
  position: relative;
  bottom: 1px;
  & > p {
    font-family: 'SlackLato-Light';
    color: ${({ theme }) => theme.colors.pink__lighter};
    font-size: 15px;
  }
`;

export const IconWrapper = styled(b.Box)`
  position: relative;
  bottom: 1.5px;

  &.tag {
    svg {
      width: 10px;
      height: 10px;
      path {
        fill: ${({ theme }) => theme.colors.pink__lighter};
      }
    }
  }
`;
