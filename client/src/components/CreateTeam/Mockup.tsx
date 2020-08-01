import * as React from 'react';
import styled, { css } from 'styled-components';

import * as b from 'global/blocks';

import { ThinHashTag } from 'assets/svg';

// Styles
import { IconWrapper } from 'styles/CreateTeam/Mockup';

export const MockHashTag = () => {
  return (
    <IconWrapper>
      <ThinHashTag />
    </IconWrapper>
  );
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
