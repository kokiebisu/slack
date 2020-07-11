import * as React from 'react';
import { useEffect } from 'react';

// Components
import { Header } from '../Header/Layout';
import { Banner } from '../Banner/Layout';
import { BreakOut } from '../Breakout/Layout';
import { Choose } from '../Choose/Layout';
import { Footer } from '../Footer/Layout';

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
