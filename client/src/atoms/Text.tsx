import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ElementProps } from 'atoms';

const Element = styled(motion.p)`
  margin: 0;
`;

export interface TextProps extends ElementProps {}

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <Element {...props}>{children}</Element>;
};
