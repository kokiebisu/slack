import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

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

const positionMixin = ({ top, bottom, left, right }: Position) => {
  return `
      top: ${top}px;
      bottom: ${bottom}px;
      left: ${left}px;
      right: ${right}px;
    `;
};

export const Wrapper = styled(motion.svg)`
  position: relative;
  ${positionMixin}

  &.linkedin {
    &:hover {
      path {
        fill: #1264a3;
      }
    }
  }
  &.facebook {
    &:hover {
      path {
        fill: #1264a3;
      }
    }
  }
  &.twitter {
    &:hover {
      path {
        fill: #50a9f1;
      }
    }
  }

  &.youtube {
    &:hover {
      path {
        fill: #d12011;
      }
    }
  }
`;
