import styled from 'styled-components';
import * as b from 'styles/blocks';

export const ConfirmButton = styled(b.Button)`
  width: 370px;
  border-radius: 5px;
  padding: 13px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary__light};
  }
`;

export const DotContainer = styled(b.Box)`
  position: relative;
  bottom: 2px;
  display: flex;
  align-items: center;
`;

export const Dot = styled(b.Box)`
  background-color: white;
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin: 0 2px;
`;

// Animations
export const DotContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const DotVariants = {
  start: {
    y: 0,
  },
  end: {
    y: 5,
  },
};

export const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
};

export const DotWrapper = styled(b.Box)``;

export const confirmVariants = {
  loading: {
    x: -15,
  },
  loaded: {
    x: 0,
  },
};
