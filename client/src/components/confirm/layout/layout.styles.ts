import styled from 'styled-components';
import * as b from '../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  max-width: 768px;
  width: 100%;
`;

export const TextInput = styled.input`
  font-size: 56px;
  width: 80px;
  padding: 15px 0 15px 37px;
  border: 0.5px solid gray;
  color: ${({ theme }) => theme.colors.black};

  &:focus {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }

  &.added {
    padding: 15px 0 15px 23px;
  }

  &.input_1 {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &.input_2 {
    border-top: 0.5px solid gray;
    border-left: none;

    &:focus {
      border-left: 0.5px solid gray;
    }
  }

  &.input_3 {
    border-top: 0.5px solid gray;
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &.input_4 {
    border-top: 0.5px solid gray;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &.input_5 {
    border-top: 0.5px solid gray;
    border-left: none;
    &:focus {
      border-left: 0.5px solid gray;
    }
  }

  &.input_6 {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: none;
  }
`;

export const ErrorSpace = styled(b.Box)`
  margin: 10px 0;
  height: 45px;
`;

export const OpenOptions = styled(b.Box)`
  p {
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: underline;
    }
  }
`;

export const IconWrapper = styled(b.Box)`
  position: relative;
  &.gmail {
    bottom: 2px;
    svg {
      width: 20px;
      height: 20px;
      path {
      }
    }
  }

  &.outlook {
    bottom: 1px;
    svg {
      width: 20px;
      height: 20px;
      path {
      }
    }
  }

  &.warning {
    svg {
      width: 20px;
      height: 20px;
      path {
        fill: ${({ theme }) => theme.colors.red};
      }

      rect {
        fill: ${({ theme }) => theme.colors.red};
      }
    }
  }
`;

export const ErrorSpaceWrapper = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.pink__lighter};
  max-width: 520px;
  width: 100%;
  padding: 10px 0;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.pink__dark};
`;

export const RotateContainer = styled(b.Box)`
  position: relative;
  width: 20px;
  height: 20px;

  span {
    display: block;
    width: 15px;
    height: 15px;
    border: 2px solid white;
    border-top: 2px solid ${({ theme }) => theme.colors.gray__light};
    border-radius: 50%;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
  }
`;

export const spinTransition = {
  loop: Infinity,
  duration: 1,
  ease: 'linear',
};
