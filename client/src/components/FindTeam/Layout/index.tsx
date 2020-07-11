import * as React from 'react';

import { Wrapper } from './index.styles';

import { useGetBelongingTeamsQuery } from '../../../generated/graphql';

import { Header } from '../Header';
import { FindTeamContent } from '../Content';
import { Footer } from '../Footer';
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
