import * as React from 'react';
import { Wrapper } from './layout.styles';

import { Header } from '../header';
import { FindTeamContent } from '../content';
import { Footer } from '../footer';
import { useLocation, Redirect } from 'react-router-dom';

export const FindTeam = () => {
  const location = useLocation();
  return (
    <>
      {location.state ? (
        <Wrapper>
          <Header />
          <FindTeamContent teams={location.state} />
          <Footer />
        </Wrapper>
      ) : (
        <Redirect to='/' />
      )}
    </>
  );
};
