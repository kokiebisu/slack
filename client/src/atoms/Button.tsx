import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { ElementProps } from 'atoms';

interface StyledProps {
  size?: 'sm' | 'md' | 'lg';
}

const Element = styled(motion.button)<StyledProps>`
    ${({ size }) =>
      !size &&
      css`
        padding: 15px 15px;
      `}
    ${({ size }) =>
      size === 'sm' &&
      css`
        padding: 15px 15px;
      `}
    ${({ size }) =>
      size === 'md' &&
      css`
        padding: 18px 25px;
      `}
    ${({ size }) =>
      size === 'lg' &&
      css`
        padding: 20px 35px;
      `}
      text-transform: uppercase;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.white};
      border: none;
      font-family: 'CircularPro-Bold';
      border-radius: 3px;
      letter-spacing: 1px;
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primary__light};
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
