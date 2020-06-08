import styled from 'styled-components';
import * as b from '../../../styles/blocks';

import { landing } from '../../../styles/sizes';

export const Wrapper = styled.footer`
  @media ${landing.xl} {
    /* padding-top: 160px; */
    height: calc(100vh - 130px);
    max-height: 400px;
  }
`;

export const LogoWrapper = styled(b.Box)`
  width: 100%;
  margin-bottom: 30px;
  @media ${landing.md} {
    width: 35%;
    margin-bottom: 0;
  }
`;

export const ContentWrapper = styled(b.Box)`
  padding: 40px 0;
  @media ${landing.md} {
    padding: 70px 0;
  }
`;

export const ContentContainer = styled(b.Flex)`
  flex-direction: column;
  @media ${landing.md} {
    flex-direction: row;
  }
`;

export const SectionsWrapper = styled(b.Flex)`
  width: 100%;
  flex-direction: column;
  @media ${landing.sm} {
    flex-direction: row;
    width: 100%;
  }
`;

export const Sections = styled(b.Flex)`
  width: 100%;
  flex-direction: row;
  @media ${landing.sm} {
    width: 50%;
  }
`;

export const Section = styled(b.Box)`
  width: 50%;
`;

export const SectionName = styled(b.Text)`
  color: #464646;
  text-transform: uppercase;
  font-size: 14px;
  font-family: 'CircularPro-Bold';
`;

export const Items = styled.ul`
  color: #696969;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  color: #868686;
  font-family: 'SlackLato-Regular';
  padding: 10px 0;
  font-size: 14px;
`;

export const ItemLink = styled(b.Text)`
  cursor: pointer;
  &:hover {
    color: #1264a3;
  }
`;

export const ArrowWrapper = styled(b.Box)`
  display: none;
  @media ${landing.sm} {
    display: block;
  }
`;

export const FooterContentWrapper = styled(b.Flex)`
  display: flex;
  flex-direction: column;
  @media ${landing.sm} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const OptionsWrapper = styled(b.Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${landing.sm} {
    flex-direction: row;
  }
`;

export const RegionContainer = styled(b.Box)`
  margin: 30px 0;
  @media ${landing.sm} {
    margin: 0px;
    margin-left: 15px;
  }
`;

export const CopyrightWrapper = styled(b.Box)`
  background-color: #ebeaeb;
  padding: 20px 0;
`;

export const CopyrightContainer = styled(b.Container)``;

export const Copyright = styled(b.Text)`
  font-size: 12px;
  text-align: center;
  @media ${landing.sm} {
    text-align: left;
  }
`;

export const SocialMediaWrapper = styled(b.Flex)`
  justify-content: center;
  align-items: center;
  @media ${landing.sm} {
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
          fill: ${({ theme }) => theme.colors.yello};
        }
        &:nth-child(4) {
          fill: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }

  &.socialmedia {
    svg {
      width: 20px;
      height: 20px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }

  &.twitter {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.blue__lighter};
      }
    }
  }

  &.facebook {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  &.linkedin {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  &.youtube {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.red__light};
      }
    }
  }

  &.bottomarrow {
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ theme }) => theme.colors.black};
      }
    }
  }

  &.globe {
    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }
`;
