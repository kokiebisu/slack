import React from 'react';
import styled from 'styled-components';

// // Components
// import { LandingHeader } from '../components/shared/Footer/Header/Landing';
// import { GetStartedFooter } from '../components/shared/Footer/GetStartedFooter';

// Blocks
import { Container } from '../styles/Blocks';

export default () => {
  return (
    <Wrapper>
      <Container>hello</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 70px;
  background-color: red;
`;

const Flex = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const TempContent = styled.div`
  background-color: gray;
  width: 100vw;
  height: 60vh;
`;
