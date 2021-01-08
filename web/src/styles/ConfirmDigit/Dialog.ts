import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Box)`
  margin: 10px 0;
  height: 45px;
`;

export const LoadingText = styled(b.Box)`
  & > p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 13px;
    font-family: 'SlackLato-Thin';
  }
`;

export const Rotate = styled(b.Box)`
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

export const Error = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.pink__lighter};
  max-width: 520px;
  width: 100%;
  padding: 10px 0;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.pink__dark};
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

export const spinTransition = {
  loop: Infinity,
  duration: 1,
  ease: 'linear',
};
