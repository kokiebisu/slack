import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { ElementProps } from 'atoms';

interface StyledProps {
  size?: 'sm' | 'md' | 'lg';
}

const Element = styled(motion.button)<StyledProps>`
    ${({ size }) =>
      size === 'sm' &&
      css`
        padding: 5px 10px;
      `}
    ${({ size }) =>
      size === 'md' &&
      css`
        padding: 10px 20px;
      `}
    ${({ size }) =>
      size === 'lg' &&
      css`
        padding: 15px 30px;
      `}
`;

export interface ButtonProps extends ElementProps, StyledProps {
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  ...props
}: ButtonProps) => (
  <Element onClick={onPress} {...props}>
    {children}
  </Element>
);
