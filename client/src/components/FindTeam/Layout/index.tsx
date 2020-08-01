import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { Wrapper } from 'components/FindTeam/Layout/index.styles';

import { useGetBelongingTeamsQuery } from 'generated/graphql';

import { Header } from 'components/FindTeam/Header';
import { FindTeamContent } from 'components/FindTeam/Content';
import { Footer } from 'components/FindTeam/Footer';

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
