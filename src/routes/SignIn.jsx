import React from 'react';
import styled from 'styled-components';

import * as b from '../styles/blocks';

import { SignInHeader } from '../components/shared/Header/SignIn';
import { SignInContent } from '../components/SignIn/SignInContent';
import { SignInFooter } from '../components/SignIn/SignInFooter';

export default () => {
  return (
    <Wrapper>
      <SignInHeader />
      <SignInContent />
      <SignInFooter />
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  height: 100vh;
  display: grid;
  grid-template-rows: 70px auto min-content;
  overflow-y: scroll;
`;
