import styled from 'styled-components';
import * as b from '../../../styles/blocks';

import { signin } from '../../../styles/sizes';

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const Wrapper = styled.div`
  background-color: white;
  height: 70px;
  border-bottom: 0.5px solid lightgray;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
`;

export const Left = styled(b.Flex)``;

export const Right = styled(b.Flex)`
  flex-grow: 1;
  justify-content: flex-end;
`;

export const LargeNav = styled(b.Box)`
  display: none;

  @media ${signin.md} {
    display: flex;
    align-items: center;
  }
`;

export const SmallNav = styled(b.Box)`
  display: flex;
  align-items: center;

  @media ${signin.md} {
    display: none;
  }
`;

export const NavItem = styled(b.Anchor)`
  border: none;
  border-radius: 6px;
  padding: 8px 10px;
  margin: 0px 3px;
  font-size: 15px;
  font-family: 'SlackLato-Regular';
  color: ${({ theme }) => theme.colors.gray__dark};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white__dark};
  }
`;

export const SignInItem = styled(b.Box)`
  border: 2px solid ${({ theme }) => theme.colors.gray__dark};
  padding: 8px 13px;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.gray__dark};
  margin-left: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
    border-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const IconWrapper = styled(b.Box)`
  &.namelogo {
    svg {
      width: 105px;
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
`;
