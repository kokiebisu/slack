import styled from 'styled-components';
import * as b from 'styles/blocks';

export const IconWrapper = styled(b.Box)`
  position: relative;
  bottom: 1.5px;
  svg {
    width: 8px;
    height: 8px;
    path {
      fill: ${({ theme }) => theme.colors.pink__light};
    }
  }
`;
