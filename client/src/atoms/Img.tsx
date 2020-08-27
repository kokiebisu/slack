import React from 'react';
import styled from 'styled-components';
import { Box, ElementProps } from 'atoms';

interface Props {
  src: any;
  alt: string;
}

interface StyledProps {
  styles?: any;
}

const Wrapper = styled(Box)<StyledProps>`
  ${({ styles }) => styles}
`;

const Element = styled.img`
  max-width: 100%;
  height: auto;
`;

export interface ImgProps extends ElementProps, Props, StyledProps {}

export const Img: React.FC<ImgProps> = ({ src, alt, ...props }: ImgProps) => (
  <Wrapper {...props}>
    <Element src={src} alt={alt} />
  </Wrapper>
);
