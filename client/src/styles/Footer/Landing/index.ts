import styled from 'styled-components';

// Blocks
import * as b from 'global/blocks';

// B
import { landing, size } from 'global/sizes';

export const Wrapper = styled.footer`
  @media ${landing.xl} {
    height: calc(100vh - 130px);
    max-height: 400px;
  }

  & > div {
    &.footer__logo {
      padding: 40px 0;
      @media ${landing.md} {
        padding: 70px 0;
      }
    }
    &.footer__options {
      background-color: ${({ theme }) => theme.colors.white__dark};
    }
    &.footer__copyright {
      background-color: #ebeaeb;
      padding: 20px 0;
    }
  }
`;

export const Logo = styled(b.Box)`
  width: 100%;
  margin-bottom: 30px;
  @media ${landing.md} {
    width: 35%;
    margin-bottom: 0;
  }
`;

export const Content = styled(b.Box)`
  &.logo {
    & > div {
      flex-direction: column;
      @media ${landing.md} {
        flex-direction: row;
      }
    }
  }

  &.options {
    width: 100%;
    & > div {
      & > div {
        flex-direction: column;
        @media ${size.sm} {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }
`;

export const Copyright = styled(b.Text)`
  font-size: 12px;
  text-align: center;
  @media ${landing.sm} {
    text-align: left;
  }
`;

export const IconWrapper = styled(b.Box)`
  &.nonamelogo {
    svg {
      width: 54px;
      height: 54px;
      path {
        &:nth-child(1) {
          fill: ${({ theme }) => theme.colors.blue__lighter};
        }
        &:nth-child(2) {
          fill: ${({ theme }) => theme.colors.green__lighter};
        }
        &:nth-child(3) {
          fill: ${({ theme }) => theme.colors.yellow};
        }
        &:nth-child(4) {
          fill: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }
`;
