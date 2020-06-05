import * as React from 'react';
import styled, { css } from 'styled-components';

import * as b from '../../styles/blocks';

import { ThinHashTag } from '../../assets/svg/HashTag';

export const MockHashTag = () => {
  return (
    <IconWrapper>
      <ThinHashTag />
    </IconWrapper>
  );
};

const IconWrapper = styled(b.Box)`
  position: relative;
  bottom: 1.5px;
  svg {
    width: 8px;
    height: 8px;
    path {
      fill: ${({ theme }) => theme.colors.pink__light};
    }
  }
`;

export const SkeletonLine = styled(b.Box)`
  position: relative;
  background-color: ${({ color }) => (color ? `${color}` : 'pink__light')};
  height: 7px;
  border-radius: 5px;
  width: ${({ width }) => `${width}%`};

  ${({ top }) =>
    top &&
    css`
      top: ${top}px;
    `}

  ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom}px;
    `}
`;
