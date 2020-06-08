import styled from 'styled-components';
import * as b from '../../../styles/blocks';

export const InputWrapper = styled(b.Box)`
  position: relative;
`;

export const Input = styled(b.Input)`
  width: 370px;
  padding: 13px 35px 13px 13px;
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
