import React from 'react';
import styled from 'styled-components';
import { Box } from 'atoms';

interface ElementProps {
  label: string;
  className?: string;
}

interface MapProps {
  [key: string]: () => JSX.Element;
}

const icons: MapProps = {};

const Element = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ({ label, ...props }: ElementProps) => {
  const Component: React.FC<{}> = icons[label];
  return (
    <Element {...props}>
      <Component />
    </Element>
  );
};
