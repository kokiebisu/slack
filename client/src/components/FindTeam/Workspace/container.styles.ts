import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Box)`
  /* width: 100%; */
  max-width: 570px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray__lighter};
`;
