import styled from 'styled-components';
import * as b from 'styles/blocks';

export const PasswordValidationWrapper = styled(b.Box)`
  width: 370px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 5px;
`;

export const PasswordValidation = styled(b.Box)`
  height: 4px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.gray__lighter};
  &.cleared {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
