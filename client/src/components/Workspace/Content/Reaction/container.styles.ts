import styled from 'styled-components';
import * as b from 'global/blocks';

export const IconWrapper = styled(b.Button)`
  background-color: ${({ theme }) => theme.colors.white__dark};
  display: inline-block;
  padding: 1px 7px;
  border-radius: 15px;
  margin-right: 5px;
  svg {
    width: 22px;
    height: 22px;
    path {
      fill: ${({ theme }) => theme.colors.gray__light};
    }
  }

  &:hover {
    padding: 0px 6px;
    border: 1px solid ${({ theme }) => theme.colors.gray__dark};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
