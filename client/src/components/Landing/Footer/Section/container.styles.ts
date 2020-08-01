import styled from 'styled-components';
import * as b from 'styles/blocks';

// Breakpoints
import { size } from 'styles/sizes';

export const Wrapper = styled(b.Flex)`
  width: 100%;
  flex-direction: column;
  @media ${size.xs} {
    flex-direction: row;
    width: 100%;
  }
`;
