import styled from 'styled-components';
import * as b from '../../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  height: calc(100vh - 65px - 37px);
  overflow-y: auto;

  & > div {
    &.section_header {
      padding: 25px 20px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray__lighter};
    }
  }
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
`;
