import styled from 'styled-components';
import * as b from '../../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  padding: 0 10px;
`;

export const Input = styled(b.Box)`
  width: 100%;
  border: none;
  font-size: 15px;
  font-family: 'SlackLato-Regular';
  white-space: pre-wrap;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray__lighter};
  }
  word-break: break-all;
  &:focus {
    outline: none;
  }

  & p {
    word-break: break-all;
  }
`;
