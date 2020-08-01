import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import {
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
  grid,
  GridProps,
  flexbox,
  FlexboxProps,
  typography,
  TypographyProps,
} from 'styled-system';

// Sizes
import { landing } from 'global/sizes';

type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  BackgroundProps &
  BorderProps &
  ShadowProps &
  GridProps & {
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
    wp?: number;
    hp?: number;
  };

export const Box = styled(motion.div)<BoxProps>`
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

type ButtonProps = SpaceProps &
  ColorProps &
  LayoutProps &
  BackgroundProps &
  BorderProps &
  ShadowProps &
  GridProps & {
    noborder?: boolean;
    uppercase?: boolean;
    transparent?: boolean;
    bgColor?: string;
  };

export const Button = styled(motion.button)<ButtonProps>`
  position: relative;
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${shadow}
  ${grid}
  border: none;
  background-color: transparent;

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

type AnchorProps = SpaceProps &
  ColorProps &
  LayoutProps &
  BackgroundProps &
  BorderProps &
  TypographyProps & { uppercase?: boolean; underline?: boolean };

export const Anchor = styled(motion.a)<AnchorProps>`
  position: relative;
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${typography}
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

type ContainerProps = SpaceProps & {
  fluid?: boolean;
  noHeight?: boolean;
  signin?: boolean;
};

export const Container = styled.div<ContainerProps>`
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

  ${({ noHeight }) =>
    noHeight &&
    css`
      height: 0;
    `}

  @media ${landing.xl} {
    max-width: 1400px;
  }

  ${({ signin }) =>
    signin &&
    css`
      padding: 0 20px;

      @media ${landing.xl} {
        max-width: none;
      }
    `}

`;

type FlexProps = FlexboxProps & { noHeight?: boolean };

export const Flex = styled.div<FlexProps>`
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

// type GridProps = { gridGap?: number };

// export const Grid = styled.div<GridProps>`
//   display: grid;

//   ${({ gridGap }) =>
//     gridGap &&
//     css`
//       grid-column-gap: ${gridGap};
//     `}
// `;

type SpanProps = SpaceProps &
  ColorProps &
  LayoutProps &
  BackgroundProps &
  BorderProps &
  TypographyProps;

export const Span = styled(motion.span)<SpanProps>`
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${typography}
`;

type InputProps = SpaceProps & BorderProps & TypographyProps;

export const Input = styled.input<InputProps>`
  ${space}
  ${border}
  ${typography}
`;

type TextProps = TypographyProps &
  ColorProps & { uppercase?: boolean; center?: boolean; right?: boolean };

export const Text = styled(motion.p)<TextProps>`
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

type LayoutWrapperProps = SpaceProps;

export const LayoutWrapper = styled.div<LayoutWrapperProps>`
  ${space}
`;
