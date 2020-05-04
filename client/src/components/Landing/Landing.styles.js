import styled from 'styled-components';
import * as b from '../../styles/blocks';

export const Title = styled(b.Text)`
  font-size: 5vw;
  line-height: 40px;

  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 55px;
  }

  @media (min-width: 1163px) {
    font-size: 46px;
  }
`;
