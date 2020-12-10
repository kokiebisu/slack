import React from "react";

/** components */
import { Header } from "components/organisms/header/header.component";
import { Auth } from "components/organisms/auth/auth.component";
import { Footer } from "components/organisms/footer/footer.component";

/** styles */
import { Wrapper } from "styles/Signin";

export const SignIn: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Header variant="signin" />
      <Auth variant="signin" />
      <Footer type="signin" />
    </Wrapper>
  );
};
