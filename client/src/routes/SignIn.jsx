import React from 'react';
import styled from 'styled-components';

import * as b from '../styles/blocks';

import { SignInHeader } from '../components/shared/Header/SignIn';
import { SignInFooter } from '../components/SignIn/SignInFooter';

export default () => {
  return (
    <Wrapper>
      <SignInHeader />
      <b.Box backgroundColor='#F8F8F8'>content</b.Box>
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
