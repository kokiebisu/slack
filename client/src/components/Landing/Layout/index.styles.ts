import styled from 'styled-components';
import * as b from '../../../styles/blocks';

import { size } from '../../../styles/sizes';

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
