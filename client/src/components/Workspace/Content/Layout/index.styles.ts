import styled from 'styled-components';
import * as b from '../../../../styles/blocks';
import { size } from '../../../../styles/sizes';

export const Wrapper = styled(b.Box)`
  height: 100%;
  display: grid;
  grid-template-rows: 65px auto;

  & > div {
    &.top {
      height: 65px;
      padding: 15px 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.white__dark};
    }

    &.bottom {
      height: 100%;
    }
  }
`;

export const Top = styled(b.Box)`
  padding: 0 19px;
  height: auto;

  & div {
    &.top__left {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
    }

    &.top__right {
      width: 100px;
    }
  }
`;

export const Bottom = styled(b.Box)`
  max-width: 420px;
  text-align: center;
`;

export const IconWrapper = styled(b.Box)`
  &.sidebar {
    width: 35px;
    height: 35px;
    & svg {
      position: relative;
      top: 2.5px;
      left: 4.5px;
      width: 25px;
      height: 25px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }

    @media ${size['7xs']} {
      display: none;
    }

    &:hover {
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.white__dark};
    }
  }
`;

export const Title = styled(b.Box)`
  & > p {
    font-size: 17px;
    font-family: 'SlackLato-Bold';
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Description = styled(b.Box)`
  & > p {
    font-size: 15px;
    font-family: 'SlackLato-Regular';
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;

export const NewMessage = styled(b.Button)`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
  & > p {
    font-size: 15px;
    font-family: 'SlackLato-Regular';
    color: ${({ theme }) => theme.colors.black__light};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white__dark};
  }
`;

export const Section = styled(b.Box)`
  & > p {
    color: ${({ theme }) => theme.colors.black};
    font-family: 'SlackLato-Black';
    font-size: 15px;
  }
`;

export const SubSection = styled(b.Text)`
  margin: 4px 0;
  & > p {
    font-size: 13px;
    font-family: 'SlackLato-Regular';
    color: ${({ theme }) => theme.colors.gray};
  }
`;