import styled from 'styled-components';
import * as b from '../../../../styles/blocks';

// Breakpoints;
import { size } from '../../../../styles/sizes';

export const Wrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 30px;

  background-color: ${({ theme }) => theme.colors.white__darker};
`;

export const InnerTop = styled(b.Box)`
  @media ${size.md} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  & > div:first-child {
    padding-left: 50px;
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
  width: 100%;
  height: 100%;
  border-radius: 5px;

  @media ${size.md} {
    flex-grow: 1;
    bottom: 50px;
  }
`;

export const Title = styled(b.Box)`
  & p {
    font-family: 'SlackLato-Light';
    color: ${({ theme }) => theme.colors.black__light};
    font-size: 52px;
    line-height: 1.2;
    font-family: 'Larsseit-Bold';
  }
`;

export const Description = styled(b.Text)`
  font-size: 18px;
  line-height: 1.4;
  text-align: center;

  @media ${size.md} {
    text-align: left;
  }
`;

export const CheckList = styled(b.Box)`
  & ul {
    padding: 0;
    list-style: none;
  }
`;

export const ColumnWrapper = styled(b.Box)`
  padding-bottom: 62px;
  @media ${size.sm} {
    padding-top: 50px;
  }
`;
