import * as React from "react";

import { Wrapper } from "styles/FindTeam";

import { Header } from "components/organisms/header/header.component";
import { Footer } from "components/organisms/footer/footer.component";
import { Prototype } from "components/prototype/auth";

export const FindTeamPage: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Header variant="find" />
      <Prototype variant="find" teams={[]} />
      <Footer variant="find" />
    </Wrapper>
  );
};
