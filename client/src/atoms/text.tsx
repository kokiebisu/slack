import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ElementProps } from 'atoms';

interface StyledProps {
  styles?: any;
}

const Element = styled(motion.p)<StyledProps>`
  margin: 0;
  ${({ styles }) => styles}
`;

export interface TextProps extends ElementProps, StyledProps {}

export const Text: React.FC<TextProps> = ({ children, styles, ...props }) => {
  return (
    <Element styles={styles.wrapper} {...props}>
      {children}
    </Element>
  );
};
