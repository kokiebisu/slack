import React from "react";
import * as b from "global/blocks";

/** components */
import { Header } from "components/organisms/header/header.component";
import { Auth } from "components/organisms/auth/auth.component";
import { Footer } from "components/organisms/footer/footer.component";

/** styles */
import { Wrapper } from "styles/Signin";

export const SignIn: React.FC<{}> = () => {
  return (
    <Wrapper>
      <b.Box position="sticky" top="0" zIndex={99}>
        <Header variant="signin" />
      </b.Box>
      <Auth variant="signin" />
      <Footer variant="signin" />
    </Wrapper>
  );
};
