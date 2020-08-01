import styled from 'styled-components';
import * as b from 'global/blocks';

export const ErrorBox = styled(b.Box)`
  width: ${({ width }) => (width === 'full' ? '100%' : `${width}px`)};
  background-color: ${({ theme }) => theme.colors.pink__lighter};
  border-radius: 3px;
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
