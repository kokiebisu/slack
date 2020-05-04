import React from 'react';
import styled from 'styled-components';

// Components
import { Header } from '../components/Landing/Header';
import { Banner } from '../components/Landing/Banner';
import { BreakOut } from '../components/Landing/BreakOut';
import { Choose } from '../components/Landing/Choose';
import { Footer } from '../components/Landing/Footer';

export default () => {
  return (
    <>
      <Header />
      <Banner />
      <BreakOut />
      <Choose />
      <Footer />
    </>
  );
};
