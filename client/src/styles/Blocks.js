import styled from 'styled-components';

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
const size = {
  md: '960px',
  lg: '1024px',
  xl: '1220px',
  '2xl': '1420px',
};

const device = {
  md: `(min-width: ${size['md']})`,
  lg: `(min-width: ${size['lg']})`,
  xl: `(min-width: ${size['xl']})`,
  '2xl': `(min-width: ${size['2xl']})`,
};

export const Box = styled.div`
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${position}
  ${shadow}
  ${grid}
`;

export const Button = styled.button`
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${position}
  ${shadow}
  ${grid}
`;

export const Container = styled.div`
  flex-grow: 1;
  background-color: blue;
  margin: 0 auto;
  width: auto;
  height: 100%;

  @media ${device['lg']} {
    max-width: ${size['md']};
  }

  @media ${device['xl']} {
    max-width: ${size['lg']};
  }

  @media ${device['2xl']} {
    max-width: ${size['xl']};
  }
`;

export const Flex = styled.div`
  display: flex;
  ${flexbox}
  height: 100%;
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
