import * as React from "react";

import { SignInHeader } from "components/Header/Signin";
import { SignInContent } from "components/Signin/Content";
import { Footer } from "components/organisms/footer/footer.component";

// Styles
import { Wrapper } from "styles/Signin";

interface Props {}

export const SignIn: React.FC<Props> = () => {
  return (
    <Wrapper>
      <SignInHeader />
      <SignInContent />
      <Footer type="signin" />
    </Wrapper>
  );
};
