import React from 'react';
import styled from 'styled-components';

// Components
import { Header } from '../components/Landing/Header';
import { Banner } from '../components/Landing/Banner';
import { BreakOut } from '../components/Landing/BreakOut';
import { Footer } from '../components/Landing/Footer';

export default () => {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Banner />
      <BreakOut />
      <Footer />
    </>
  );
};

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
`;
