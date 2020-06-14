import styled from 'styled-components';
import * as b from '../../../styles/blocks';

import { size } from '../../../styles/sizes';

export const Header = styled(b.Box)`
  width: 100%;
  max-width: 570px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray__lighter};
`;

export const Title = styled(b.Box)`
  & > p {
    font-size: 24px;
    font-family: 'SlackLato-Black';
  }
`;

export const Description = styled(b.Box)`
  & > p {
    font-size: 14px;
    font-family: 'SlackLato-Regular';
    color: ${({ theme }) => theme.colors.gray__light};
  }
`;

export const Top = styled(b.Box)`
  border-bottom: 2px solid red;
  max-width: 500px;
  background-color: red;
`;
