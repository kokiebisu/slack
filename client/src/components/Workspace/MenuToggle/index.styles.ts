import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Box)`
  width: 310px;
  position: absolute;
  top: 96px;
  left: 15px;
  z-index: 9999;
  max-height: 600px;
  height: calc(100vh - 130px);
  background-color: ${({ theme }) => theme.colors.white__dark};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  @media (max-height: 500px) {
    top: 10px;
    height: calc(100vh - 20px);
  }
`;

export const IconWrapper = styled(b.Box)`
  position: relative;
  &.smile {
    margin: 0 5px;
    padding: 1.5px;

    svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }

  &.angleright {
    svg {
      width: 10px;
      height: 10px;
    }
  }

  &.slackapp {
    left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27px;
    height: 27px;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
    border-radius: 100%;

    & > div {
      width: 18px;
      height: 18px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const Section = styled(b.Box)`
  &.first {
    padding: 15px 0;
  }

  &.second {
    padding: 15px 0;
  }

  &.third {
    padding: 5px 0;
  }

  &.fourth {
    padding: 5px 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray__lighter};
  }
`;
