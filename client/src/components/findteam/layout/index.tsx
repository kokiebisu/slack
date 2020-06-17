import * as React from 'react';

import { Wrapper } from './index.styles';

import { useGetBelongingTeamsQuery } from '../../../generated/graphql';

import { Header } from '../header';
import { FindTeamContent } from '../content';
import { Footer } from '../footer';
import { Redirect } from 'react-router-dom';

export const FindTeam = () => {
  const {
    data: { getBelongingTeams } = {},
    loading,
    error,
  } = useGetBelongingTeamsQuery();

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
