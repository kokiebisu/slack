import styled from 'styled-components';
import * as b from 'styles/blocks';

export const Wrapper = styled(b.Box)``;

export const StyledInput = styled(b.Box)`
  width: 50%;
  padding-right: 7px;
  & > input {
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.gray__light};
    font-size: 17px;
    color: ${({ theme }) => theme.colors.gray};
    padding: 7px 0 7px 6px;
  }
`;
