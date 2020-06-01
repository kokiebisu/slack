import React, { useState, useEffect } from 'react';
import { useAuthenticated } from '../hooks/useCheckLoggedIn';

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

  // const [authenticated, setAuthenticated] = useState(useAuthenticated());

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
