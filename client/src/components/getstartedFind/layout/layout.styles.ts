import styled from 'styled-components';
import * as b from '../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  max-width: 768px;
  width: 100%;
`;

export const EmailInput = styled(b.Input)`
  width: 370px;
  padding: 13px 0 13px 13px;
`;

export const ConfirmButton = styled(b.Button)`
  width: 370px;
  border-radius: 5px;
  padding: 13px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary__light};
  }
`;
