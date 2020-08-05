import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Box)`
  border: 1px solid black;
  border-radius: 4px;
  & > div:first-child {
    padding: 10px 5px;
  }
  & > div:last-child {
    border-top: 1px solid #dddddd;
    background-color: #f8f8f8;
    padding: 7px 5px;
    border-radius: inherit;
  }
  button {
    border: none;
    background-color: transparent;
    height: 21px;
    width: 21px;
    cursor: pointer;
    svg {
      height: 100%;
      width: 100%;
      path {
        fill: black;
      }
    }
    &:hover {
      background: darkgray;
    }
  }
`;
