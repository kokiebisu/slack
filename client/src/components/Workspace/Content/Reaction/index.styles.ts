import styled from 'styled-components';
import * as b from '../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.white__dark};
  display: flex;
  align-items: center;
  padding: 0px 8px;
  border-radius: 15px;
  margin-right: 5px;

  &:hover {
    padding: 0px 7px;
    border: 1px solid ${({ theme }) => theme.colors.gray__dark};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Container = styled(b.Flex)`
  height: auto;
`;
