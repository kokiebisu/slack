import styled from "styled-components";
import * as b from "global/blocks";

import { size } from "global/sizes";

export const ModalWrapper = styled(b.AnimatedBox)`
  background-color: white;
  position: fixed;
  z-index: 9999;
  right: -500px;
  height: 100%;
  top: 0;
  right: 0;
  overflow-x: hidden;

  @media ${size.lg} {
    display: none;
  }
`;
