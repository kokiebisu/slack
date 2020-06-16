import styled from 'styled-components';
import * as b from '../../../../../styles/blocks';

export const Wrapper = styled(b.Box)`
  padding: 0 10px;
  & > div {
    & > div {
      & > p {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        display: block;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }
    }
  }
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
