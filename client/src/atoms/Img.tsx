import React from 'react';
import styled from 'styled-components';
import { Box } from 'atoms';

interface Props {
  src: any;
  alt: string;
  className?: string;
}

const Element = styled.img`
  max-width: 100%;
  height: auto;
`;

export default ({ src, alt, ...props }: Props) => (
  <Box {...props}>
    <Element src={src} alt={alt} />
  </Box>
);
