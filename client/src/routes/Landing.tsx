import * as React from 'react';
import { useEffect } from 'react';

// Components
import { Header } from '../components/Landing/Header';
import { Banner } from '../components/Landing/Banner';
import { BreakOut } from '../components/Landing/BreakOut';
import { Choose } from '../components/Landing/Choose';
import { Footer } from '../components/Landing/Footer';

interface Props {}

export const Landing: React.FC<Props> = () => {
  useEffect(() => {
    document.title = 'Where work happens | Slack';
  }, []);

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
