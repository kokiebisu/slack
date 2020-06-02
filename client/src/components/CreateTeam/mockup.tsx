import * as React from 'react';
import styled, { css } from 'styled-components';

import * as b from '../../styles/blocks';

import { HashTag } from '../../assets/svg/HashTag';

export const MockHashTag = () => {
  return <HashTag width={8} height={8} color='#caadcd' bottom={1} />;
};

export const SkeletonLine = styled(b.Box)`
  position: relative;
  background-color: ${({ color }) => (color ? `${color}` : `#caadcd`)};
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
