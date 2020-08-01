import styled from 'styled-components';
import * as b from 'styles/blocks';

export const Wrapper = styled(b.Box)`
  display: relative;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Container = styled(b.Box)`
  background-color: white;
  max-width: 650px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
`;
