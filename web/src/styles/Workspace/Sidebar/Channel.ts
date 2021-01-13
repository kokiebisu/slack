import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Button)`
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
  bottom: 1px;
  & > p {
    font-family: 'SlackLato-Light';
    color: ${({ theme }) => theme.colors.pink__lighter};
    font-size: 14px;
  }
`;

export const IconWrapper = styled(b.Box)`
  position: relative;
  bottom: 1.5px;

  &.tag {
    svg {
      width: 10px;
      height: 10px;
      path {
        fill: ${({ theme }) => theme.colors.pink__lighter};
      }
    }
  }
`;
