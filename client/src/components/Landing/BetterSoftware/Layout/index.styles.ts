import styled from 'styled-components';

import * as b from '../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  padding-top: 100px;
  padding-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.white__darker};
`;
