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
  transparent?: boolean;
  styles?: any;
}

const primary = theme('mode', {
  light: lighten(0.05, colors.primary),
});

const secondary = theme('mode', {
  light: colors.white,
});

const hover = theme('mode', {
  light: colors.blue,
});

const Element = styled(motion.button)<StyledProps>`
  ${({ styles }) => styles}
color: ${secondary};
      font-size: 14px;
      font-family: 'CircularPro-Bold';
      border-radius: 3px;
      letter-spacing: 1px;
      cursor: pointer;
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
    ${({ transparent }) =>
      transparent
        ? css`
            background: transparent;
            border: none;
            color: ${colors.black};
            letter-spacing: 0;
            font-size: 16px;
            font-family: 'CircularPro-Book';
            &:hover {
              color: ${hover};
              text-decoration: underline;
            }
          `
        : css`
            background-color: ${primary};
            text-transform: uppercase;
            &:hover {
              transition: all 1s ease-in-out;
              background-color: ${colors.primary};
            }
          `}
    ${({ inverse }) =>
      inverse &&
      css`
        text-transform: uppercase;
        color: ${primary};
        background-color: transparent;
        border: 1px solid ${primary};
        &:hover {
          transition: all 1s ease-in-out;
          border-width: 2px;
        }
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
