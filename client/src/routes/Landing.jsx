import React from 'react';
import styled from 'styled-components';

// Components
import { LandingHeader } from '../components/shared/Header/Landing';
import { GetStartedFooter } from '../components/shared/Footer/GetStartedFooter';

export default () => {
  return (
    <>
      <LandingHeader />
      <TempContent />
      <GetStartedFooter />
    </>
  );
};

const TempContent = styled.div`
  background-color: gray;
  width: 100vw;
  height: 60vh;
`;
