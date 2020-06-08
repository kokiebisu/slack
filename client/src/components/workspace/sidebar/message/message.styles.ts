import * as React from 'react';
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

  &.status {
    top: 2.5px;
  }
`;

export const Status = styled(b.Box)`
  width: 9px;
  height: 9px;
  background-color: ${({ theme }) => theme.colors.green__lighter};
  border-radius: 100%;
`;
