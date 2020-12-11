import * as React from "react";
import { Redirect } from "react-router-dom";
import { useGetBelongingTeamsQuery } from "generated/graphql";

/** styles */
import { Wrapper } from "styles/FindTeam";

/** components */
import { FindTeamContent } from "components/FindTeam/Content";
import { Header } from "components/organisms/header/header.component";
import { Footer } from "components/organisms/footer/footer.component";

export const FindTeam = () => {
  const {
    data: { getBelongingTeams } = {},
    loading,
    error,
  } = useGetBelongingTeamsQuery();

  return (
    <>
      {!error && !loading && !getBelongingTeams?.ok! ? (
        <Redirect to="/" />
      ) : (
        <Wrapper>
          <>
            <Header variant="find" />
            <>
              {getBelongingTeams?.belongingTeams! &&
                getBelongingTeams!.belongingTeams!.length > 0 && (
                  <FindTeamContent teams={getBelongingTeams?.belongingTeams} />
                )}
            </>
            <Footer variant="find" />
          </>
        </Wrapper>
      )}
    </>
  );
};
