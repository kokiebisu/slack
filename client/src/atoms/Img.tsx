import React from 'react';
import styled from 'styled-components';
import { Box, ElementProps } from 'atoms';

interface Props {
  src: any;
  alt: string;
}

const Element = styled.img`
  max-width: 100%;
  height: auto;
`;

export interface ImgProps extends ElementProps, Props {}

export const Img: React.FC<ImgProps> = ({ src, alt, ...props }: ImgProps) => (
  <Box {...props}>
    <Element src={src} alt={alt} />
  </Box>
);
