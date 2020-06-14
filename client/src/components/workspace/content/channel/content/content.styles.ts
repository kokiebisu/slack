import styled from 'styled-components';
import * as b from '../../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  height: calc(100vh - 65px - 37px);
  overflow-y: auto;

  & > div {
    &.section_header {
      padding: 25px 20px;
    }

    &.section_content {
      position: relative;
      border-top: 1px solid ${({ theme }) => theme.colors.gray__lighter};
      padding: 25px 20px;
    }
  }
`;

export const DateSeperator = styled(b.Box)`
  position: absolute;
  top: 0;
  left: 50%;
  top: -16px;
  z-index: 10;
  transform: translateX(-50%);
  border-radius: 15px;
  padding: 6px 18px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled(b.Box)`
  & > p {
    font-size: 28px;
    font-family: 'SlackLato-Black';
  }
`;

export const Description = styled(b.Box)`
  & > p {
    font-size: 18px;
    line-height: 1.5;
    span {
      &.creator {
        background-color: ${({ theme }) => theme.colors.blue__0};
        color: ${({ theme }) => theme.colors.blue};
      }
      &.channel_name {
        font-family: 'SlackLato-Bold';
      }
      &.edit_button {
        color: ${({ theme }) => theme.colors.blue};
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
`;

export const Options = styled(b.Box)`
  margin: 15px 0 25px 0;
`;

export const Option = styled(b.Button)`
  p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.blue__light};
  }

  &:hover {
    & > div {
      & > div {
        &:nth-child(1) {
          & > svg {
            & > path {
              fill: ${({ theme }) => theme.colors.blue};
            }
          }
        }
        &:nth-child(2) {
          & > p {
            color: ${({ theme }) => theme.colors.blue};
          }
        }
      }
    }
  }

  &:nth-child(2) {
    position: relative;
    top: 2px;
  }
`;

export const IconWrapper = styled(b.Box)`
  position: relative;
  &.layer_plus {
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.blue__light};
      }
    }
  }
  &.user_plus {
    svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.blue__light};
      }
    }
  }
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

export const Date = styled(b.Box)`
  & > p {
    font-size: 13px;
    font-family: 'SlackLato-Bold';
  }
`;
