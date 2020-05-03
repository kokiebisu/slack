import styled, { css } from 'styled-components';

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

// Breakpoints
export const size = {
  xs: '805px',
  sm: '810px',
  md: '960px',
  lg: '1084px',
  xl: '1220px',
  '2xl': '1330px',
};

export const device = {
  sm: `(min-width: ${size['sm']})`,
  md: `(min-width: ${size['md']})`,
  lg: `(min-width: ${size['lg']})`,
  xl: `(min-width: ${size['xl']})`,
  '2xl': `(min-width: ${size['2xl']})`,
};

export const Box = styled.div`
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
`;

export const Button = styled.button`
  position: relative;
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${shadow}
  ${grid}
`;

export const Container = styled.div`
  ${space}
  position: relative;
  flex-grow: 1;
  margin: 0 auto;
  width: auto;
  height: 100%;
  padding: 0 calc(5%);

  /* @media ${device['sm']} {
    padding: 0 10px;
  }

  @media ${device['md']} {
    max-width: ${size['sm']};
  }

  @media ${device['lg']} {
    max-width: ${size['md']};
  }
*/
  /* @media ${device['xl']} {
    padding: 0 60px;
  } */

  @media ${device['2xl']} {
    max-width: ${size['xl']};
    padding: 0 10px;
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
`;

export const LayoutWrapper = styled.div`
  ${space}
`;
