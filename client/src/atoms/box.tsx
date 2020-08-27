import React from 'react';
import { motion } from 'framer-motion';
import { ElementProps } from 'atoms';
import styled from 'styled-components';

interface StyledProps {
  styles?: any;
}

export interface BoxProps extends ElementProps, StyledProps {}

const Element = styled(motion.div)<StyledProps>`
  ${({ styles }) => styles}
`;

export const Box: React.FC<BoxProps> = ({ children, ...props }) => (
  <Element {...props}>{children}</Element>
);
