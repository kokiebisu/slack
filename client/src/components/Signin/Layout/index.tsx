import * as React from 'react';

import { SignInHeader } from '../Header';
import { SignInContent } from '../Content';
import { SignInFooter } from '../Footer';

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
