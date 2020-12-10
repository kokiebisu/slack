import React from "react";

/** components */
import { Header } from "components/organisms/header/header.component";
import { SignInContent } from "components/Signin/Content";
import { Footer } from "components/organisms/footer/footer.component";

/** styles */
import { Wrapper } from "styles/Signin";

interface Props {}

export const SignIn: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Header type="signin" />
      <SignInContent />
      <Footer type="signin" />
    </Wrapper>
  );
};
