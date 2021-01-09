import React from "react";
import * as b from "../global/blocks";
import { Auth } from "src/components/organisms/auth/auth.component";
import { Footer } from "../components/organisms/footer/footer.component";
import { Header } from "../components/organisms/header/header.component";

export const GetStartedPage: React.FC<{}> = () => {
  return (
    <b.Box>
      <b.Grid gridTemplateRows="auto 1fr auto">
        <div>
          <Header variant="create" />
        </div>
        <b.Box my={5}>
          <b.Flex justifyContent="center">
            <Auth variant="getstarted" />
          </b.Flex>
        </b.Box>
        <div>
          <Footer variant="getstarted" />
        </div>
      </b.Grid>
    </b.Box>
  );
};
