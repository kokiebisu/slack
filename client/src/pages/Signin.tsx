import * as React from 'react';

import { SignInHeader } from 'components/Header/Signin';
import { SignInContent } from 'components/Signin/Content';
import { SignInFooter } from 'components/Footer/Signin';

// Styles
import { Wrapper } from 'styles/Signin';

interface Props {}

export const SignIn: React.FC<Props> = () => {
  return (
    <Wrapper>
      <SignInHeader />
      <SignInContent />
      <SignInFooter />
    </Wrapper>
  );
};
