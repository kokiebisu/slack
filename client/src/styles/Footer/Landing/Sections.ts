import styled from 'styled-components';
import * as b from 'global/blocks';

// Breakpoints
import { size } from 'global/sizes';

export const Wrapper = styled(b.Flex)`
  width: 100%;
  flex-direction: column;
  @media ${size.xs} {
    flex-direction: row;
  }
`;
