import styled from 'styled-components';
import * as b from '../../../styles/blocks';

// Sizes
import { landing } from '../../../styles/sizes';

export const LaunchOptionWrapper = styled(b.Box)`
  display: none;

  @media ${landing.lg} {
    display: block;
    position: absolute;
    top: 80px;
    right: calc(5%);
    border-radius: 3px;
  }
`;

export const LaunchOption = styled(b.Box)`
  padding: 10px;
  min-width: 380px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
`;

export const LaunchOptionLink = styled(b.Anchor)`
  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const Wrapper = styled.div`
  background-color: white;
  height: 70px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.white__dark};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
`;

export const Left = styled(b.Flex)``;

export const Right = styled(b.Flex)`
  flex-grow: 1;
  justify-content: flex-end;

  @media ${landing.lg} {
    justify-content: space-between;
  }
`;

export const Nav = styled.div`
  display: none;
  align-items: center;

  @media ${landing.lg} {
    display: flex;
  }
`;

export const NavItem = styled(b.Box)`
  position: relative;
  border: none;
  background-color: transparent;
  padding: 12px 0px;
  margin: 0px 15px;
  font-size: 16px;
  font-family: 'CircularPro-Book';
  cursor: pointer;
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

  @media ${landing.lg} {
    display: block;
  }
`;

export const GetStartedButtonWrapper = styled(b.Flex)`
  display: none;

  @media ${landing.lg} {
    display: flex;
  }
`;

export const GetStartedButton = styled(b.Anchor)`
  letter-spacing: 0.1em;
  background-color: ${({ theme }) => theme.colors.primary__light};
  border-radius: 5px;
  padding: 13px 13px;
`;

export const Dropdown = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 45px;
  padding: 13px 20px;
  border-radius: 5px;
`;

export const LinkWrapper = styled.div`
  padding: 8px 0;
  display: flex;
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

  &.hamburgerbutton {
    svg {
      width: 24px;
      height: 17px;
      path {
        fill: black;
      }
    }

    @media ${landing.lg} {
      display: none;
    }
  }
`;
