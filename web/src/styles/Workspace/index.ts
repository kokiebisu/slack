import styled from 'styled-components';
import * as b from 'global/blocks';

import { size } from 'global/sizes';

export const Wrapper = styled(b.Box)`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 37px auto;
  overscroll-behavior: none;
`;

export const ContentWrapper = styled(b.Box)`
  height: calc(100vh - 37px);
  display: grid;

  @media ${size['7xs']} {
    grid-template-columns: 220px auto;
  }

  @media ${size.xl} {
    grid-template-columns: 260px auto;
  }
`;
