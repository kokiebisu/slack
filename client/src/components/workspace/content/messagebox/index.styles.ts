import styled from 'styled-components';
import * as b from '../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  position: fixed;
  z-index: 50;
  bottom: 0;
  background-color: white;
  /* width: 100%; */
  height: 110px;
`;

export const Content = styled(b.Box)`
  background-color: red;
  /* border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 0 10px; */
`;
