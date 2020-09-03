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

export const buttonColors = {
  primary: theme('mode', {
    light: lighten(0.05, colors.primary),
  }),
  secondary: theme('mode', {
    light: colors.white,
  }),
  hover: theme('mode', {
    light: colors.blue,
  }),
};

export const launchButtonStyles = {
  wrapper: css`
    background-color: ${buttonColors.primary};
    color: ${buttonColors.secondary};
    &:hover {
      transition: all 1s ease-in-out;
      background-color: ${buttonColors.primary};
    }
  `,
  flex: css`
    display: flex;
    align-items: center;
  `,
  textwrapper: css`
    margin-right: 15px;
  `,
};

const Element = styled(motion.button)<StyledProps>`
      font-size: 14px;
      font-family: 'CircularPro-Bold';
      border-radius: 3px;
      letter-spacing: 1px;
      cursor: pointer;
      padding: 15px 15px;
      text-transform: uppercase;
      border: none;
    
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
      transparent &&
      css`
        background: transparent;
        color: ${colors.black};
        letter-spacing: 0;
        font-size: 16px;
        text-transform: initial;
        font-family: 'CircularPro-Book';
        &:hover {
          color: ${buttonColors.hover};
          text-decoration: underline;
        }
      `}
    ${({ inverse }) =>
      inverse &&
      css`
        color: ${buttonColors.primary};
        background-color: transparent;
        border: 1px solid ${buttonColors.primary};
        &:hover {
          transition: all 1s ease-in-out;
          border-width: 2px;
        }
      `}
      ${({ styles }) => styles}
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
