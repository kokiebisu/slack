import styled, { css } from 'styled-components';
import * as b from 'global/blocks';

// Breakpoints
import { size } from 'global/sizes';

export const Wrapper = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.colors.white__darker};
`;

export const Content = styled(b.Box)`
  & > div {
    @media ${size.xs} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  & div {
    &.content__left {
      width: 100%;

      @media ${size.md} {
        max-width: 450px;
        height: min-content;
      }
      & > div {
        @media ${size.md} {
          width: 95%;
        }
      }
    }
    &.content__right {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
      @media ${size.xs} {
        margin-top: 0;
      }
    }
  }
`;

export const Header = styled(b.Box)`
  & p {
    font-family: 'Larsseit-Bold';
    line-height: 1.1;
    font-size: 60px;
    color: ${({ theme }) => theme.colors.black__light};
  }
`;

export const Description = styled(b.Box)`
  & p {
    font-size: 18px;
    line-height: 1.3;
  }
`;

export const Buttons = styled(b.Box)`
  & > div {
    display: block;
    @media ${size.lg} {
      display: flex;
    }
  }
`;

export const Button = styled(b.Box)`
  & > button {
    font-size: 14px;
    font-family: 'CircularPro-Bold';
    border-radius: 3px;
    letter-spacing: 1px;
    width: 100%;
    padding: 20px 0;
    text-transform: uppercase;
    height: 60px;
    @media ${size.lg} {
      width: auto;
      padding: 0 40px;
    }
  }
  &.button__filled {
    & > button {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &.button__border {
    margin-top: 15px;
    margin-left: 0px;
    @media ${size.lg} {
      margin-top: 0;
      margin-left: 15px;
    }
    & > button {
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.primary__light};
      color: ${({ theme }) => theme.colors.primary__light};
    }
  }
`;

export const BannerVideo = styled(b.Box)`
  &.tablet {
    display: block;
    width: 100%;
    & video {
      width: 100%;
    }
    @media ${size.md} {
      max-width: 400px;
    }

    @media ${size.lg} {
      display: none;
    }
  }

  &.desktop {
    display: none;
    @media ${size.lg} {
      display: block;
      width: 100%;
      max-width: 1000px;
      & video {
        width: 100%;
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

export const Title = styled(b.Text)`
  font-size: 5vw;
  line-height: 40px;

  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 55px;
  }

  @media (min-width: 1163px) {
    font-size: 46px;
  }
`;
