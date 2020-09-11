import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Text, ElementProps } from 'atoms';
import theme from 'styled-theming';
import { darken, lighten } from 'polished';
import { colors } from 'global';

export const buttonColors = {
  primary: theme('mode', {
    light: lighten(0.05, '#3F0F40'),
  }),
  secondary: theme('mode', {
    light: '#FFFFFF',
  }),
  hover: theme('mode', {
    light: '#005A9D',
  }),
};

export const primaryButtonStyles = {
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
  text: css`
    font-size: 14px;
    font-family: 'CircularPro-Bold';
    letter-spacing: 1px;
    text-transform: uppercase;
  `,
};

export const transparentButtonStyles = {
  wrapper: css`
    background: transparent;
  `,
  text: css`
    color: #000000;
    letter-spacing: 0;
    font-size: 16px;
    text-transform: initial;
    font-family: 'CircularPro-Book';
    &:hover {
      color: ${buttonColors.hover};
      text-decoration: underline;
    }
  `,
};

export const inverseButtonStyles = {
  wrapper: css`
    background-color: transparent;
    border: 1px solid ${buttonColors.primary};
    &:hover {
      transition: all 1s ease-in-out;
      border-width: 2px;
    }
  `,
  text: css`
    color: ${buttonColors.primary};
  `,
};
