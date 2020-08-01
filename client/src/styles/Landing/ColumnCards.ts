import styled from 'styled-components';
import * as b from 'global/blocks';

export const Columns = styled(b.Box)`
  & > div {
    flex-wrap: wrap;
  }
`;
