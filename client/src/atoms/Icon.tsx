import React from 'react';
import styled, { css } from 'styled-components';
import { Box, ElementProps, MapProps } from 'atoms';
import { BottomArrow, NameLogo } from 'assets/svg';

const icons: MapProps = {
  BottomArrow: BottomArrow,
  NameLogo: NameLogo,
};

interface StyledProps {
  width: number;
  fill?: string;
}

const Element = styled(Box)<StyledProps>`
  ${({ styles }) => styles}
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: ${({ width }) =>
    width &&
    css`
      ${width}px
    `};
  & > svg {
    width: 100%;
    path {
      ${({ fill }) =>
        fill &&
        css`
          fill: ${fill};
        `}
    }
  }
`;

export interface IconProps extends ElementProps, StyledProps {
  label: string;
}

export const Icon: React.FC<IconProps> = ({ label, ...props }: IconProps) => {
  const Component: React.FC<{}> = icons[label];
  return (
    <Element {...props}>
      <Component />
    </Element>
  );
};
