import styled from 'styled-components';
import * as b from '../../../../styles/blocks';

export const Columns = styled(b.Box)`
  & > div {
    flex-wrap: wrap;
  }
`;
