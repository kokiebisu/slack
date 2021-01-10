import * as React from "react";
import { useGetBelongingTeamsQuery } from "../generated/graphql";

import { Wrapper } from "../styles/FindTeam";

import { Header } from "../components/organisms/header/header.component";
import { Footer } from "../components/organisms/footer/footer.component";
import { Auth } from "../components/organisms/auth/auth.component";

export const FindTeamPage: React.FC<{}> = () => {
  const { data: { getBelongingTeams } = {} } = useGetBelongingTeamsQuery();

  return (
    <Wrapper>
      <Header variant="find" />
      <Auth variant="find" teams={[]} />
      <Footer variant="find" />
    </Wrapper>
  );
};
