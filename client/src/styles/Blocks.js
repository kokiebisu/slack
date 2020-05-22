import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import {
  space,
  color,
  layout,
  background,
  border,
  shadow,
  grid,
  flexbox,
  typography,
} from 'styled-system';

// Sizes
import { landing } from './sizes';

export const Box = styled(motion.div)`
  position: relative;
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${shadow}
  ${grid}

  top: ${({ top }) => `${top}px`};
  bottom: ${({ bottom }) => `${bottom}px`};
  right: ${({ right }) => `${right}px`};
  left: ${({ left }) => `${left}px`};


  ${({ wp }) =>
    wp &&
    css`
      width: ${wp}%;
    `}

  ${({ hp }) =>
    hp &&
    css`
      height: ${hp}%;
    `}
`;

export const Button = styled(motion.button)`
  position: relative;
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${shadow}
  ${grid}
  border: none;
  

  cursor: pointer;

  ${({ noborder }) =>
    noborder &&
    css`
      border: none;
    `}

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${({ transparent, bgColor }) =>
    transparent &&
    css`
      background-color: white;
      border-style: solid;
      border-color: ${bgColor};
    `}

`;

export const Anchor = styled(motion.a)`
  position: relative;
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  text-decoration: none;

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
    `}
`;

export const Container = styled.div`
  ${space}
  position: relative;
  flex-grow: 1;
  margin: 0 auto;
  width: auto;
  height: 100%;
  padding: 0 calc(5%);

  ${({ fluid }) =>
    fluid &&
    css`
      margin: 0;
    `}

  @media ${landing.xl} {
    max-width: 1400px;
  }
`;

export const Flex = styled.div`
  ${flexbox}
  position: relative;
  display: flex;
  height: 100%;
  ${({ noHeight }) =>
    noHeight &&
    css`
      height: 0;
    `}
`;

export const Grid = styled.div`
  display: grid;

  ${({ gridGap }) =>
    gridGap &&
    css`
      grid-column-gap: gridGap;
    `}
`;

export const Input = styled.input`
  ${space}
`;

export const Text = styled.p`
  ${typography}
  ${color}
  padding: 0;
  margin: 0;

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}

  ${({ right }) =>
    right &&
    css`
      text-align: right;
    `}
`;

export const LayoutWrapper = styled.div`
  ${space}
`;
