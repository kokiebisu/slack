import styled from 'styled-components';
import * as b from '../../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  position: sticky;
  z-index: 50;
  bottom: 0;
  height: 110px;
  width: 100%;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.white};
  & > div {
    height: 100%;
    padding-bottom: 30px;
  }
`;

export const Content = styled(b.Box)`
  border-radius: 5px;
  height: inherit;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;
