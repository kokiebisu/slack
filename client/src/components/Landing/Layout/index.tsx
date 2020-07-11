import * as React from 'react';
import { useEffect } from 'react';

// Components
import { Header } from '../Header/layout';
import { Banner } from '../Banner/layout';
import { BreakOut } from '../Breakout/layout';
import { Choose } from '../Choose/layout';
import { Footer } from '../Footer/layout';

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
