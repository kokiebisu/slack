import { css } from 'styled-components';

export interface SVG extends Position {
  width: number;
  height: number;
  color?: string;
}

interface Position {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export const positionMixin = (props: Position) => {
  return `
      top: ${props.top}px;
      bottom: ${props.bottom}px;
      left: ${props.left}px;
      right: ${props.right}px;
    `;
};
