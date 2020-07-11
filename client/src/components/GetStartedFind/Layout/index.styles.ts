import styled from 'styled-components';
import * as b from '../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  max-width: 768px;
  width: 100%;
`;

export const EmailInput = styled(b.Input)`
  width: 370px;
  padding: 13px 0 13px 13px;
`;

export const ConfirmButton = styled(b.Button)`
  width: 370px;
  border-radius: 5px;
  padding: 13px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary__light};
  }
`;

export const ErrorBox = styled(b.Box)`
  width: 370px;
  background-color: ${({ theme }) => theme.colors.pink__lighter};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.pink};
  padding: 10px 0 10px 10px;
`;

export const IconWrapper = styled(b.Box)`
  position: relative;

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
