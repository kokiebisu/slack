import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Text, ElementProps } from 'atoms';
import theme from 'styled-theming';
import { darken, lighten } from 'polished';
import { colors } from 'global';

interface StyledProps {
  size?: 'sm' | 'md' | 'lg';
  inverse?: boolean;
  transparent?: boolean;
  styles?: any;
}

const Element = styled(motion.button)<StyledProps>`
      border-radius: 3px;
      cursor: pointer;
      padding: 15px 15px;
      border: none;
      background-color: gray;
    
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
    ${({ styles }) => styles}
`;

export interface ButtonProps extends ElementProps, StyledProps {
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children = <Text>Button</Text>,
  styles,
  onPress,
  ...props
}: ButtonProps) => (
  <Element
    styles={styles && styles.wrapper}
    data-testid='button'
    onClick={onPress}
    {...props}>
    {children}
  </Element>
);
