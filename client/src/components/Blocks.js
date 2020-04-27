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

export const Flex = styled.div`
  display: flex;
  ${flexbox}
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
