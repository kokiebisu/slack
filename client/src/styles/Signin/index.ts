import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Box)`
  height: 100vh;
  display: grid;
  grid-template-rows: 70px auto min-content;
  overflow-y: scroll;
`;
