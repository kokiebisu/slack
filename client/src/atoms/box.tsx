import React from 'react';
import { motion } from 'framer-motion';
import { ElementProps } from 'atoms';
import styled from 'styled-components';

interface StyledProps {
  styles?: any;
}

const Element = styled(motion.div)<StyledProps>`
  ${({ styles }) => styles};
`;

export interface BoxProps extends ElementProps, StyledProps {}

export const Box: React.FC<BoxProps> = ({ children, ...props }) => (
  <Element {...props}>{children}</Element>
);
