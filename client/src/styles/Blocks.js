import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { size, device } from './sizes';

import {
  space,
  color,
  layout,
  background,
  border,
  position,
  shadow,
  grid,
  flexbox,
  typography,
} from 'styled-system';

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
  ${border}
  ${shadow}
  ${grid}
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

export const Container = styled.div`
  ${space}
  position: relative;
  flex-grow: 1;
  margin: 0 auto;
  width: auto;
  height: 100%;
  padding: 0 calc(5%);

  @media ${device['2xl']} {
    max-width: ${size['xl']};
    padding: 0 0;
  }

  ${({ fluid }) =>
    fluid &&
    css`
      margin: 0;
    `}
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
  height: 100%;
  width: 100%;
  ${grid}
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
`;

export const LayoutWrapper = styled.div`
  ${space}
`;
