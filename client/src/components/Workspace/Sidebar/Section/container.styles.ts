import styled from 'styled-components';
import * as b from 'styles/blocks';

export const Wrapper = styled(b.Box)`
  border-top: 1.3px solid ${({ theme }) => theme.colors.primary__lighter};
  padding: 15px 0;
`;

export const InviteButton = styled(b.Box)`
  &:focus {
    outline: none;
  }
`;
