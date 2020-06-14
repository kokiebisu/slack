import styled from 'styled-components';
import * as b from '../../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  position: sticky;
  top: 0;
  height: 30px;

  & div {
    &.divider {
      height: 100%;
      position: relative;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.gray__lighter};
    }
    &.date_modal {
      position: absolute;
      width: 100%;
      left: 50%;
      top: -15px;
      height: 70px;
      & > div {
        position: sticky;
        top: 8px;
        height: 30px;
        z-index: 10;
        max-width: 150px;
        transform: translateX(-50%);
        border-radius: 15px;
        padding: 6px 18px;
        background-color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

export const Date = styled(b.Box)`
  & > p {
    font-size: 13px;
    font-family: 'SlackLato-Bold';
  }
`;

export const IconWrapper = styled(b.Box)`
  position: relative;

  &.bottom_arrow {
    bottom: 1px;
    svg {
      width: 8px;
      height: 8px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }
`;
