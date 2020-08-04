import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Box)`
  position: absolute;
  width: 100%;
  height: 100%;

  & > div {
    &.section_content {
      height: 100%;
      overflow-y: scroll;
    }
  }
`;
