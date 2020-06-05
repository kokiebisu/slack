import * as React from 'react';
import styled, { css } from 'styled-components';

import * as b from '../../styles/blocks';

import { ThinHashTag } from '../../assets/svg/HashTag';

export const MockHashTag = () => {
  return <ThinHashTag width={8} height={8} color='pink__light' bottom={1.5} />;
};

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
