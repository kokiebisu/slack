import styled from 'styled-components';
import * as b from '../../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  display: grid;
  grid-template-rows: 65px auto;

  & > div {
    &.top {
      border-bottom: 1px solid ${({ theme }) => theme.colors.white__dark};
      height: 100%;
    }

    &.bottom {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.white__dark};
    }
  }
`;

export const Top = styled(b.Flex)`
  justify-content: space-between;
  align-items: center;
  height: inherit;
  padding: 0 19px;
`;

export const Bottom = styled(b.Box)`
  width: 100%;
  padding: 20px 20px 0px 20px;
  /* margin: 20px 20px 0 20px; */
`;

export const Section = styled(b.Box)`
  & > p {
    color: ${({ theme }) => theme.colors.black__light};
    font-family: 'SlackLato-Black';
    font-size: 15px;
  }
`;

export const Notice = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 25px;
`;

export const IconWrapper = styled(b.Box)`
  &.atsign {
    svg {
      width: 17px;
      height: 17px;
      path {
        fill: ${({ theme }) => theme.colors.orange__dark};
      }
    }
  }

  &.close {
    svg {
      width: 13px;
      height: 13px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }

  &.sideoption {
    padding: 8px 10px 6px 10px;
    background-color: transparent;
    &:hover {
      background-color: ${({ theme }) => theme.colors.white__dark};
      border-radius: 3px;
    }

    svg {
      width: 17px;
      height: 17px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

export const NoticeTitle = styled(b.Box)`
  p {
    color: ${({ theme }) => theme.colors.black__light};
    font-size: 18px;
    font-family: 'SlackLato-Bold';
    letter-spacing: -0.025em;
  }
`;

export const NoticeDescription = styled(b.Box)`
  & > p {
    font-family: 'SlackLato-Regular';
    font-size: 15px;
    color: ${({ theme }) => theme.colors.black__light};
  }
`;
