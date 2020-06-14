import * as React from 'react';
import { useEffect } from 'react';
import { Wrapper } from './layout.styles';

import {
  useMyTeamsQuery,
  useGetBelongingTeamsQuery,
} from '../../../generated/graphql';

import { Header } from '../header';
import { FindTeamContent } from '../content';
import { Footer } from '../footer';
import { useLocation, Redirect, useParams } from 'react-router-dom';

export const FindTeam = () => {
  const {
    data: { getBelongingTeams } = {},
    loading,
    error,
  } = useGetBelongingTeamsQuery();

  const tempTeams = [
    { id: 'sadfdsafasdfdsa', avatarBackground: '#ffffff', name: 'kens team' },
  ];

  return (
    <>
      {!error && !loading && !getBelongingTeams?.ok! ? (
        <Redirect to='/' />
      ) : (
        <Wrapper>
          <>
            <Header />
            <>
              {getBelongingTeams?.belongingTeams! &&
                getBelongingTeams!.belongingTeams!.length > 0 && (
                  <FindTeamContent teams={getBelongingTeams?.belongingTeams} />
                )}
            </>
            <Footer />
          </>
        </Wrapper>
      )}
    </>
  );
};
