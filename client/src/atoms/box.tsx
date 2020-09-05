import React from 'react';
import { Text } from 'atoms';
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

export const Box: React.FC<BoxProps> = ({
  children = <Text>Box</Text>,
  ...props
}) => <Element {...props}>{children}</Element>;
