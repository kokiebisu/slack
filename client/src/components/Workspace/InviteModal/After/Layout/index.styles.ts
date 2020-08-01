import styled from 'styled-components';
import * as b from 'styles/blocks';

export const Header = styled(b.Box)`
  margin-bottom: 20px;
`;

export const Title = styled(b.Box)`
  & > p {
    font-family: 'SlackLato-Black';
    font-size: 18px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const IconWrapper = styled(b.Box)`
  &.user-plus {
    & svg {
      width: 20px;
      height: 20px;
      path {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  &.plus-circle {
    & svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.blue__light};
      }
    }
  }

  &.google {
    & svg {
      width: 18px;
      height: 18px;
    }
  }

  &.paper-plane {
    & svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }
`;

export const IconButtonWrapper = styled(b.Button)`
  position: relative;
  &.close {
    width: 35px;
    height: 35px;
    svg {
      position: relative;
      top: 2px;
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.black};
      }
    }
    &:focus {
      outline: none;
    }
    &:hover {
      border-radius: 100%;
      background-color: ${({ theme }) => theme.colors.white__dark};
    }
  }
  &.info {
    top: 1.5px;
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }
`;

export const Footer = styled(b.Box)`
  margin-top: 60px;

  & p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;

export const SendButton = styled(b.Button)`
  background-color: ${({ theme }) => theme.colors.green};
  padding: 8px 18px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'SlackLato-Bold';
  font-size: 14px;
`;

export const Description = styled(b.Box)`
  & > p {
    font-family: 'SlackLato-Regular';
    font-size: 14px;

    & > span {
      font-family: 'SlackLato-Bold';
    }
  }
`;

export const Content = styled(b.Box)``;

export const ContentHeader = styled(b.Box)`
  margin: 20px 0 6px 0;
  & p {
    font-size: 14px;
    font-family: 'SlackLato-Bold';
  }

  & div {
    &.content__section {
      width: 50%;
    }
  }
`;

export const Line = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.green};
  width: 100%;
  height: 2px;
`;
