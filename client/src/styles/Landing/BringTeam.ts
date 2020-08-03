import styled from 'styled-components';
import * as b from 'global/blocks';

// Breakpoints;
import { size } from 'global/sizes';

export const Wrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 30px;

  @media ${size.lg} {
    padding-top: 0px;
  }
`;

export const Inner = styled(b.Box)`
  @media ${size.md} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
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

export const VideoWrapper = styled(b.Box)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;

  @media ${size.md} {
    flex-grow: 1;
    padding-right: 50px;
    bottom: 50px;
  }

  video {
    border-radius: 5px;
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 1.5rem rgba(105, 105, 105, 0.5);
  }
`;

export const Title = styled(b.Text)`
  font-size: 5vw;
  line-height: 43px;
  font-family: 'Larsseit-Bold';

  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 55px;
  }

  @media (min-width: 1163px) {
    font-size: 46px;
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

export const ColumnWrapper = styled(b.Box)`
  padding-bottom: 62px;
  @media ${size.sm} {
    padding-top: 50px;
  }
`;
