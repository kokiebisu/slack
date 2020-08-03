import styled from 'styled-components';
import * as b from 'global/blocks';

import { size } from 'global/sizes';

export const ModalWrapper = styled(b.Box)`
  background-color: white;
  position: absolute;
  z-index: 200;
  right: -500px;
  height: 100%;
  overflow: hidden;

  @media ${size.lg} {
    display: none;
  }
`;
