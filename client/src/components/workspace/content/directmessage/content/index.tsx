import React from 'react';

// Components
import { MessageBox } from '../../messagebox/layout';
import { MessageContainer } from '../container';

// Styles
import { Wrapper } from './index.styles';

export const index = () => {
  return (
    <Wrapper>
      <MessageContainer />
      <MessageBox />
    </Wrapper>
  );
};
