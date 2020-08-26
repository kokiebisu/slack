import React from 'react';
import styled, { css } from 'styled-components';
import { Box, ElementProps, MapProps } from 'atoms';
import { BottomArrow } from 'assets/svg';

const icons: MapProps = {
  BottomArrow: BottomArrow,
};

interface StyledProps {
  width: number;
  fill?: string;
}

const Element = styled(Box)<StyledProps>`
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
      fill: ${({ fill }) => (fill ? fill : 'white')};
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
