import styled from 'styled-components';
import * as b from 'global/blocks';

// Sizes
import { size } from 'global/sizes';

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;

  & > div {
    background-color: white;
    height: 70px;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.white__dark};
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  }
`;

export const Right = styled(b.Box)`
  flex-grow: 1;

  & > div {
    justify-content: flex-end;

    @media ${size.md} {
      justify-content: space-between;
    }
  }
`;

export const SignInButton = styled(b.Box)`
  color: black;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;

export const LaunchButtonWrapper = styled(b.Box)``;

export const LaunchButton = styled(b.Anchor)`
  display: none;
  padding: 13px 15px;
  text-transform: uppercase;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-family: 'CircularPro-Bold';
  border-radius: 3px;
  letter-spacing: 1px;
  cursor: pointer;

  @media ${size.lg} {
    display: block;
  }
`;

export const GetStartedButtonWrapper = styled(b.Flex)`
  display: none;

  @media ${size.lg} {
    display: flex;
  }
`;

export const GetStartedButton = styled(b.Anchor)`
  letter-spacing: 0.1em;
  background-color: ${({ theme }) => theme.colors.primary__light};
  border-radius: 5px;
  padding: 13px 13px;
`;

export const IconWrapper = styled(b.Box)`
  &.namelogo {
    svg {
      width: 100px;
      height: 60px;
      path {
        &:nth-child(2) {
          fill: ${({ theme }) => theme.colors.blue__lighter};
        }
        &:nth-child(3) {
          fill: ${({ theme }) => theme.colors.green__lighter};
        }
        &:nth-child(4) {
          fill: ${({ theme }) => theme.colors.yellow};
        }
        &:nth-child(5) {
          fill: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }

  &.bottomarrow {
    svg {
      height: 10px;
      width: 10px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const IconButtonWrapper = styled(b.Button)`
  &.hamburgerbutton {
    svg {
      width: 24px;
      height: 17px;
      path {
        fill: black;
      }
    }

    @media ${size.md} {
      display: none;
    }

    &:focus {
      outline: none;
    }
  }
`;
