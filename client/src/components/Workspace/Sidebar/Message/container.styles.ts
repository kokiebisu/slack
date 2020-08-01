import styled from 'styled-components';
import * as b from 'styles/blocks';

export const IconWrapper = styled(b.Box)`
  position: relative;
  &.heart {
    bottom: 2px;

    svg {
      width: 10px;
      height: 10px;
      path {
        fill: ${({ theme }) => theme.colors.green__lighter};
      }
    }
  }
`;

export const SlackBot = styled(b.Box)`
  padding: 5px 0px 5px 23px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary__dark};
  }

  &:focus {
    background: ${({ theme }) => theme.colors.blue__light};
    outline: 0;

    p {
      color: white;
    }

    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Name = styled(b.Box)`
  position: relative;
  bottom: 0.5px;
  & > p {
    font-family: 'SlackLato-Light';
    color: ${({ theme }) => theme.colors.pink__lighter};
    font-size: 14px;
  }
`;
