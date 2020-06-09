import * as React from 'react';
import { useEffect } from 'react';
import { Wrapper } from './layout.styles';

import { useMyTeamsQuery } from '../../../generated/graphql';

import { Header } from '../header';
import { FindTeamContent } from '../content';
import { Footer } from '../footer';
import { useLocation, Redirect, useParams } from 'react-router-dom';

export const FindTeam = () => {
  const { data: { myTeams } = {}, loading, error } = useMyTeamsQuery();

  return (
    <>
      {!error && !loading && !myTeams!.ok ? (
        <Redirect to='/' />
      ) : (
        <Wrapper>
          <>
            <Header />
            <>{myTeams?.teams && <FindTeamContent teams={myTeams?.teams} />}</>
            <Footer />
          </>
        </Wrapper>
      )}
    </>
  );
};
