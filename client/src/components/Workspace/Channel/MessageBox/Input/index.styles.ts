import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Box)`
  padding: 0 10px;
  & > div {
    & > div {
      padding: 4px 0;
      width: 100%;
      & > p {
        word-break: break-all;
        padding-left: 2px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        display: block;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
        margin-inline-start: 1px;
        margin-inline-end: 0px;
      }
    }
  }
`;
