import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { ElementProps } from 'atoms';
import theme from 'styled-theming';
import { darken, lighten } from 'polished';
import { colors } from 'global/colors';

interface StyledProps {
  size?: 'sm' | 'md' | 'lg';
  inverse?: boolean;
}

const primary = theme('mode', {
  light: lighten(0.05, colors.primary),
});

const secondary = theme('mode', {
  light: colors.white,
});

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
    ${({ inverse }) =>
      inverse
        ? css`
            color: ${primary};
            background-color: transparent;
            &:hover {
              transition: all 1s ease-in-out;
              border-width: 2px;
            }
          `
        : css`
            color: ${secondary};
            background-color: ${primary};
            &:hover {
              transition: all 1s ease-in-out;
              background-color: ${colors.primary};
            }
          `}
      text-transform: uppercase;
      font-size: 14px;
      border: 1px solid ${primary};
      font-family: 'CircularPro-Bold';
      border-radius: 3px;
      letter-spacing: 1px;
      cursor: pointer;

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
