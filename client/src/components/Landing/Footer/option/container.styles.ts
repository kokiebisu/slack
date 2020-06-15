import styled, { css } from 'styled-components';
import * as b from '../../../../styles/blocks';

// Breakpoints
import { size } from '../../../../styles/sizes';

export const Wrapper = styled(b.Box)`
  & > div {
    flex-direction: column;
    @media ${size.sm} {
      flex-direction: row;
    }
  }
`;

export const ChangeRegionButton = styled(b.Button)`
  margin: 30px 0;

  & p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};
    font-family: 'CircularPro-Bold';
  }

  & > div {
    & > div {
      &:nth-child(3) {
        display: none;
        @media ${size.sm} {
          display: block;
        }
      }
    }
  }

  &:hover {
    & p {
      color: ${({ theme }) => theme.colors.blue};
    }

    & > div {
      & > div {
        &:nth-child(1) {
          & > svg {
            path {
              fill: ${({ theme }) => theme.colors.blue} !important;
            }
          }
        }
        &:nth-child(3) {
          & > div {
            & > svg {
              path {
                fill: ${({ theme }) => theme.colors.blue} !important;
              }
            }
          }
        }
      }
    }
  }

  @media ${size.sm} {
    margin: 0px;
  }
`;

export const IconWrapper = styled(b.Box)`
  position: relative;
  &.bottom__arrow {
    bottom: 2px;
    svg {
      width: 8px;
      height: 8px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }

  &.globe {
    top: 2px;
    svg {
      width: 16px;
      height: 16px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

export const Link = styled(b.Anchor)`
  text-transform: none;

  &.hovered {
    color: #1264a3;
    border-bottom: 1px solid #1264a3;
    cursor: pointer !important;
  }

  ${({ fontFamily }) =>
    fontFamily &&
    css`
      font-family: ${fontFamily};
    `}
`;

export const ArrowWrapper = styled(b.Box)``;
