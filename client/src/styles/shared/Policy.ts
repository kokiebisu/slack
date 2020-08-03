import styled from 'styled-components';
import * as b from 'global/blocks';

export const PolicyWrapper = styled(b.Box)`
  width: 370px;

  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
