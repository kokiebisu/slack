import styled from 'styled-components';
import * as b from 'global/blocks';

// Breakpoints;
import { size } from 'global/sizes';

export const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 70px;

  background-color: ${({ theme }) => theme.colors.white__darker};
`;

export const InnerTop = styled(b.Box)`
  margin-bottom: 50px;
  @media ${size.sm} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  & > div:first-child {
    @media ${size.sm} {
      display: flex;
      align-items: center;
      width: 50%;
    }
    @media ${size.md} {
      width: 40%;
    }
  }

  & > div:last-child {
    @media ${size.sm} {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 50%;
    }
    @media ${size.md} {
      width: 60%;
    }
  }
`;

export const InnerBottom = styled(b.Box)`
  display: flex;
  flex-direction: column-reverse;
  @media ${size.sm} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & > div:first-child {
    @media ${size.sm} {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
    }
    @media ${size.md} {
      width: 60%;
    }
  }

  & > div:last-child {
    margin-bottom: 30px;
    @media ${size.sm} {
      display: flex;
      align-items: center;
      width: 50%;
      margin-bottom: 0px;
    }
    @media ${size.md} {
      width: 40%;
    }
  }
`;

export const LearnMore = styled(b.Box)`
  width: 100%;
  & > a {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.blue};
  }

  & div {
    justify-content: center;
    @media ${size.lg} {
      justify-content: flex-start;
    }
  }
`;

export const ImageWrapper = styled(b.Box)`
  position: relative;
  border-radius: 5px;
  &.integrations {
    width: 50%;

    @media ${size.sm} {
      width: 100%;
    }
  }
  &.enterprise {
    max-width: 230px;

    @media ${size.md} {
      max-width: 400px;
    }
  }

  & img {
    width: 100%;
  }
`;

export const Title = styled(b.Box)`
  & p {
    font-family: 'SlackLato-Light';
    color: ${({ theme }) => theme.colors.black__light};
    font-size: 48px;
    line-height: 1.2;
    font-family: 'Larsseit-Bold';
  }
`;

export const Description = styled(b.Box)`
  margin-top: 16px;
  & p {
    font-size: 18px;
    line-height: 1.4;
    text-align: center;

    @media ${size.md} {
      text-align: left;
    }
  }
`;

export const CheckList = styled(b.Box)`
  width: 100%;
  margin: 20px 0;
  & ul {
    padding: 0;
    margin: 0;
    list-style: none;

    & li {
      margin: 15px 0;
    }
  }
`;

export const IconWrapper = styled(b.Box)`
  display: flex;
  align-items: center;
  margin-right: 10px;
  & > div {
    & > svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

export const ColumnWrapper = styled(b.Box)`
  padding-bottom: 62px;
  @media ${size.sm} {
    padding-top: 50px;
  }
`;
