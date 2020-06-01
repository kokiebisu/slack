import React, { useEffect } from 'react';

// Components
import { Header } from '../components/Landing/Header';
import { Banner } from '../components/Landing/Banner';
import { BreakOut } from '../components/Landing/BreakOut';
import { Choose } from '../components/Landing/Choose';
import { Footer } from '../components/Landing/Footer';

import { useHelloQuery } from '../generated/graphql.tsx';
import { getAccessToken } from '../global/token';

export default () => {
  useEffect(() => {
    document.title = 'Where work happens | Slack';
  }, []);

  console.log('access', getAccessToken());

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
