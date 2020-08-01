import styled from 'styled-components';
import * as b from 'styles/blocks';

export const Header = styled(b.Box)`
  margin-bottom: 20px;
`;

export const Title = styled(b.Box)`
  & > p {
    font-family: 'SlackLato-Black';
    font-size: 22px;
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

export const PricingPlans = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.blue__0};
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.blue__light};
  margin-bottom: 15px;

  & p {
    font-family: 'SlackLato-Regular';
    font-size: 15px;
    text-align: center;
    line-height: 1.5;
    & > span {
      font-family: 'SlackLato-Bold';
    }

    & > a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.blue__light};
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const EmailInputs = styled(b.Box)`
  width: 100%;
  margin-bottom: 20px;

  & > div {
    width: 100%;

    &:first-child {
      margin-bottom: 5px;
    }
  }
`;

export const EmailInputHeader = styled(b.Box)`
  width: 50%;
  & > p {
    font-size: 15px;
    font-family: 'SlackLato-Bold';
  }
`;

export const AddOptions = styled(b.Box)`
  margin-bottom: 25px;
  & > div {
    &:first-child {
      margin-bottom: 5px;
    }
  }
`;

export const AddOptionText = styled(b.Box)`
  position: relative;
  bottom: 1px;
  & > p {
    font-size: 14px;
    font-family: 'SlackLato-Regular';

    & span {
      color: ${({ theme }) => theme.colors.blue__light};
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
  padding: 10px 12px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'SlackLato-Bold';
  font-size: 15px;
`;
