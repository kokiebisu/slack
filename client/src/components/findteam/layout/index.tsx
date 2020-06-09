import * as React from 'react';
import { Wrapper } from './layout.styles';

import { Header } from '../header';

import { Footer } from '../footer';

export const index = () => {
  return (
    <Wrapper>
      <Header />
      <div>hello</div>
      <Footer />
    </Wrapper>
  );
};
