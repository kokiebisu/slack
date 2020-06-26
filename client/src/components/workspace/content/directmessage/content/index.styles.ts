import styled from 'styled-components';
import * as b from '../../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  height: calc(100vh - 65px - 37px);
  overflow-y: auto;

  position: relative;

  & > div {
    &.section_header {
      padding: 25px 20px;
    }

    &.section_content {
      position: relative;
      height: calc(100vh - 65px - 180px- 104px);
      padding: 40px 20px 40px 20px;
    }
  }
`;
