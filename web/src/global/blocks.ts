import styled, { css } from "styled-components";
import { motion } from "framer-motion";

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
  position,
  PositionProps,
} from "styled-system";

// Sizes
import { landing } from "./sizes";

export const AnimatedBox = styled(motion.div)<
  SpaceProps &
    ColorProps &
    LayoutProps &
    BackgroundProps &
    BorderProps &
    ShadowProps &
    GridProps &
    PositionProps & {
      top?: number;
      bottom?: number;
      right?: number;
      left?: number;
      wp?: number;
      hp?: number;
    }
>`
  position: relative;
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${shadow}
  ${grid}
  ${position}

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

export const Box = styled.div<
  SpaceProps &
    ColorProps &
    LayoutProps &
    BackgroundProps &
    BorderProps &
    ShadowProps &
    GridProps &
    PositionProps & {
      wp?: number;
      hp?: number;
      breakall?: boolean;
      extends?: any;
    }
>`
  position: relative;
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${shadow}
  ${grid}
  ${position}

  ${(props) => props.extends}

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

  ${({ breakall }) =>
    breakall &&
    css`
      word-break: break-all;
    `}
`;

export const Footer = styled.div<
  SpaceProps &
    ColorProps &
    LayoutProps &
    BackgroundProps &
    BorderProps &
    ShadowProps &
    GridProps &
    PositionProps & {
      wp?: number;
      hp?: number;
    }
>`
  position: relative;
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${shadow}
  ${grid}
  ${position}


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

export const Ul = styled.ul<LayoutProps & SpaceProps>`
  ${layout}
  ${space}
    display: block;
`;

export const Li = styled.li<LayoutProps & SpaceProps>`
  ${layout}
  ${space}
  display: block;
`;

export const Grid = styled.div<GridProps & LayoutProps>`
  display: grid;
  ${grid}
  ${layout}

  height: 100%;
`;

export const Position = styled.button<PositionProps>`
  ${position}
`;

export const Button = styled(motion.button)<
  SpaceProps &
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
    }
>`
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

export const Anchor = styled.a<
  SpaceProps &
    ColorProps &
    LayoutProps &
    BackgroundProps &
    BorderProps &
    TypographyProps & { uppercase?: boolean; underline?: boolean }
>`
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

export const Container = styled.div<
  SpaceProps & {
    fluid?: boolean;
    noHeight?: boolean;
    signin?: boolean;
  }
>`
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

export const Flex = styled.div<FlexboxProps & { noHeight?: boolean }>`
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

export const AnimatedSpan = styled(motion.span)<
  SpaceProps &
    ColorProps &
    LayoutProps &
    BackgroundProps &
    BorderProps &
    TypographyProps
>`
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${typography}
`;

export const Span = styled.span<
  SpaceProps &
    ColorProps &
    LayoutProps &
    BackgroundProps &
    BorderProps &
    TypographyProps
>`
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${typography}
`;

export const Input = styled.input<
  SpaceProps & BorderProps & TypographyProps & LayoutProps
>`
  ${space}
  ${layout}
  ${border}
  ${typography}
`;

export const Text = styled.p<
  TypographyProps &
    ColorProps & {
      uppercase?: boolean;
      nowrap?: boolean;
      breakall?: boolean;
    }
>`
  ${typography}
  ${color}
  padding: 0;
  margin: 0;
  text-transform: ${({ uppercase }) => uppercase && "uppercase"};
  white-space: ${({ nowrap }) => nowrap && "nowrap"};
  word-break: ${({ breakall }) => breakall && "break-all"};
  text-transform: ${({ capitalize }) => capitalize && "capitalize"};
`;

export const LayoutWrapper = styled.div<SpaceProps>`
  ${space}
`;
