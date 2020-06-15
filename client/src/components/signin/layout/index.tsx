import * as React from 'react';

import { SignInHeader } from '../header';
import { SignInContent } from '../content';
import { SignInFooter } from '../footer';

// Styles
import { Wrapper } from './index.styles';

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
