import styled from 'styled-components';
import * as b from 'global/blocks';

export const Wrapper = styled(b.Box)`
  border: 1px solid black;
  border-radius: 4px;
  & > div:first-child {
    margin: 10px 0 10px 10px;
  }
  & > div:last-child {
    border-top: 1px solid #dddddd;
    background-color: #f8f8f8;
    padding: 5px 5px;
    border-radius: inherit;
  }
  button {
    border: none;
    background-color: transparent;
    height: 25px;
    width: 25px;
    cursor: pointer;
    svg {
      height: 12px;
      width: 12px;
      path {
        fill: black;
      }
    }
    &:hover {
      background: darkgray;
    }
    &:first-child {
      border-right: 1px solid #dddddd;
    }
  }

  div {
    &.public-DraftStyleDefault-block {
      right: 2px;
    }
  }
`;
