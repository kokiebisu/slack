import styled from 'styled-components';
import * as b from '../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  padding: 5px 0px 5px 23px;
`;

export const IconWrapper = styled(b.Box)`
  position: relative;

  &.status {
    top: 2.5px;
  }
`;

export const Status = styled(b.Box)`
  width: 9px;
  height: 9px;
  background-color: ${({ theme }) => theme.colors.green__lighter};
  border-radius: 100%;
`;
