import React from 'react';
import styled from 'styled-components';
import { Box, ElementProps, MapProps } from 'atoms';
import { BottomArrow } from 'assets/svg';

const icons: MapProps = {
  BottomArrow: BottomArrow,
};

const Element = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface IconProps extends ElementProps {
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
