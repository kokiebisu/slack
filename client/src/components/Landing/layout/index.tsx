import * as React from 'react';
import { useEffect } from 'react';

// Components
import { Header } from '../header';
import { Banner } from '../Banner';
import { BreakOut } from '../breakout';
import { Choose } from '../choose';
import { Footer } from '../footer';

// Graphql
import { useMeQuery } from '../../../generated/graphql';

interface Props {}

export const Landing: React.FC<Props> = () => {
  useEffect(() => {
    document.title = 'Where work happens | Slack';
  }, []);

  const { data } = useMeQuery();

  return (
    <>
      <Header data={data} />
      <Banner />
      <BreakOut />
      <Choose />
      <Footer />
    </>
  );
};
