import styled from 'styled-components';
import * as b from 'styles/blocks';

// Breakpoints
import { signin } from 'styles/sizes';

export const Wrapper = styled.footer`
  width: 100%;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TopContainer = styled(b.Box)`
  width: 100%;
  padding: 0;
  max-width: 1050px;

  @media ${signin.sm} {
    padding: 32px 0;
  }
`;

export const SectionNameWrapper = styled(b.Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  @media ${signin.sm} {
    padding: 0;
    height: auto;
    display: block;
  }
`;

export const SectionWrapper = styled(b.Box)`
  position: relative;
  height: 10px;
`;

export const SectionName = styled(b.Text)`
  font-family: 'SlackLato-Bold';
  color: ${({ color }) => color};
  margin: 0;
  text-transform: uppercase;
  font-size: 0.7rem;

  @media ${signin.sm} {
    font-size: 0.65rem;
  }
`;

export const IconWrapper = styled(b.Box)`
  &.roundedheart {
    position: absolute;
    top: -4px;
    left: 32px;

    svg {
      width: 10px;
      height: 10px;
      path {
        fill: ${({ theme }) => theme.colors.pink__dark};
      }
    }
  }

  &.nonamelogomono {
    svg {
      width: 20px;
      height: 20px;
      path {
        fill: ${({ theme }) => theme.colors.gray__light};
      }
    }
  }

  &.socialmedia {
    top: 2px;
    svg {
      width: 20px;
      height: 20px;
      path {
        fill: ${({ theme }) => theme.colors.gray__dark};
      }
    }
  }

  &.reveal {
    display: block;

    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }

    @media ${signin.sm} {
      padding: 0;
      display: none;
    }
  }
`;

export const ListWrapper = styled(b.Flex)`
  display: block;
  @media ${signin.sm} {
    display: flex;
  }
`;

export const ListContainer = styled(b.Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.white__dark};
  width: 100%;
  cursor: pointer;

  @media ${signin.sm} {
    border-bottom: 0;
    width: 25%;
  }
`;

export const LargeList = styled.ul`
  display: none;

  @media ${signin.sm} {
    display: block;
    padding: 0;
  }
`;

export const SmallList = styled.ul`
  display: block;
  padding-left: 10px;

  @media ${signin.sm} {
    display: none;
  }

  div {
    font-family: 'SlackLato-Regular';
  }
`;

export const Item = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.79rem;
  font-family: 'SlackLato-Light';
  margin: 5px 0;

  &:hover {
    color: ${({ theme }) => theme.colors.gray__dark};
    cursor: pointer;
  }
`;

export const BottomContainer = styled(b.Box)`
  width: 100%;
  max-width: 1050px;
`;

export const ContactWrapper = styled(b.Anchor)`
  position: relative;
  bottom: 1px;

  &:hover {
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;
