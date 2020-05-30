import React from 'react';
import styled from 'styled-components';

import * as b from '../styles/blocks';

import { SignInHeader } from '../components/shared/Header/SignIn';
import { SignInFooter } from '../components/SignIn/SignInFooter';

export default () => {
  return (
    <Wrapper>
      <SignInHeader />
      <b.Box></b.Box>
      <SignInFooter />
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  height: 100vh;
`;
