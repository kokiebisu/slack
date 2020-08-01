import styled from 'styled-components';
import * as b from 'styles/blocks';

import { size } from 'styles/sizes';

export const Wrapper = styled(b.Box)`
  width: 100%;
  margin-top: 50px;

  @media ${size.lg} {
    width: 50%;
  }

  @media ${size.xl} {
    width: 33%;
  }

  & > div {
    padding-right: 15px;
  }
`;

export const IconWrapper = styled(b.Box)`
  svg {
    width: 48px;
    height: 48px;
    path {
      fill: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const Title = styled(b.Box)`
  & p {
    font-family: 'CircularPro-Bold';
    color: ${({ theme }) => theme.colors.black__light};
    font-size: 18px;
  }
`;

export const SubTitle = styled(b.Box)`
  & p {
    font-size: 18px;
    line-height: 1.6;
  }
`;
