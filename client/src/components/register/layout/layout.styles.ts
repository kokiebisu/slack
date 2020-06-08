import styled from 'styled-components';
import * as b from '../../../styles/blocks';

// Animations
export const DotContainterVariants = {
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
    x: -10,
  },
  loaded: {
    x: 0,
  },
};

export const InputWrapper = styled(b.Box)`
  position: relative;
`;

export const Wrapper = styled(b.Box)`
  max-width: 768px;
  width: 100%;
`;

export const Input = styled(b.Input)`
  width: 370px;
  padding: 13px 35px 13px 13px;
`;

export const ErrorBox = styled(b.Box)`
  width: 370px;
  background-color: ${({ theme }) => theme.colors.pink__lighter};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.pink};
  padding: 10px 0 10px 10px;
`;

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

export const IconWrapper = styled(b.Box)`
  position: relative;
  &.checkcircle {
    position: absolute;
    top: 50%;
    transform: translateY(-45%);
    right: 12px;
    svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }
  &.warning {
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.pink};
      }
      rect {
        fill: ${({ theme }) => theme.colors.pink};
      }
    }
  }
`;

export const PasswordValidationWrapper = styled(b.Box)`
  width: 370px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 5px;
`;

export const PasswordValidation = styled(b.Box)`
  height: 4px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.gray__lighter};
  &.cleared {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const PolicyWrapper = styled(b.Box)`
  width: 370px;

  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const ValidationTextWrapper = styled(b.Box)`
  width: 370px;
`;
