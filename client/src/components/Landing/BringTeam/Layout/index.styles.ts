import styled from 'styled-components';
import * as b from '../../../../styles/blocks';

// Breakpoints;
import { landing } from '../../../../styles/sizes';

export const Wrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 30px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray__light};
`;

export const VideoWrapper = styled(b.Box)`
  video {
    position: relative;
    top: 3px;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 1.5rem rgba(105, 105, 105, 0.5);

    @media ${landing.md} {
      max-width: 800px;
    }
  }
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
