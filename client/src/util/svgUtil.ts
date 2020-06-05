import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.svg)`
  position: relative;

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
