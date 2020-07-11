import React from 'react';

// Components
import { MessageBox } from '../MessageBox/layout';
import { MessageContainer } from '../Container';

// Styles
import { Wrapper } from './index.styles';

export const Content = () => {
  return (
    <Wrapper>
      <MessageContainer />
      <MessageBox />
    </Wrapper>
  );
};
