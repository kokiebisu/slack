import * as React from 'react';

import { SignInHeader } from 'components/Signin/Header';
import { SignInContent } from 'components/Signin/Content';
import { SignInFooter } from 'components/Signin/Footer';

// Styles
import { Wrapper } from 'components/Signin/Layout/index.styles';

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
