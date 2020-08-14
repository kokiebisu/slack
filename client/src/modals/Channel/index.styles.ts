import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Box)`
  display: relative;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Container = styled(b.Box)`
  background-color: white;
  max-width: 520px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
`;

export const Header = styled(b.Box)`
  margin-bottom: 20px;
`;

export const Title = styled(b.Box)`
  & > p {
    font-family: 'SlackLato-Black';
    font-size: 28px;
    color: ${({ theme }) => theme.colors.black};
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

export const Description = styled(b.Box)`
  & > p {
    font-size: 14px;
    line-height: 1.5;
    font-family: 'SlackLato-Regular';
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;

export const SectionHeader = styled(b.Box)`
  margin-top: 20px;
  margin-bottom: 10px;
  & > p {
    font-family: 'SlackLato-Bold';
    font-size: 14px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray__light};
  font-size: 17px;
  color: ${({ theme }) => theme.colors.gray};
  &.name {
    padding: 12px 0 12px 40px;
  }
  &.description {
    padding: 12px 0 12px 15px;
  }
`;

export const Hint = styled(b.Box)`
  margin-top: 6px;
  p {
    font-size: 13px;
    font-family: 'SlackLato-Light';
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const PrivateOption = styled(b.Box)`
  margin: 30px 0;
  & > div {
    & > div {
      &:nth-child(1) {
        width: 60%;
      }
      &:nth-child(2) {
        width: auto;
      }
    }
  }
  div {
    &.title {
      margin-bottom: 10px;
      p {
        font-size: 15px;
        font-family: 'SlackLato-Bold';
        color: ${({ theme }) => theme.colors.black__light};
      }
    }
    &.description {
      p {
        line-height: 1.5;
        font-family: 'SlackLato-Regular';
        font-size: 15px;
        color: ${({ theme }) => theme.colors.gray__light};
        span {
          font-family: 'SlackLato-Bold';
          color: ${({ theme }) => theme.colors.gray__darker};
        }
      }
    }
  }
`;

export const LearnMore = styled(b.Box)`
  p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray__light};
    font-family: 'SlackLato-Regular';
  }
`;

export const LearnButton = styled(b.Button)`
  background-color: ${({ theme }) => theme.colors.gray__lighter};
  color: ${({ theme }) => theme.colors.gray};
  font-family: 'SlackLato-Bold';
  border-radius: 5px;
  padding: 10px 18px;
  font-size: 15px;
`;

export const NameWrapper = styled(b.Box)`
  position: relative;
  & > div {
    position: absolute;
    top: 50%;
    transform: translateY(-40%) translateX(100%);
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }
`;
