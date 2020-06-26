import React from 'react';
import * as b from '../../../../../styles/blocks';

// Components
import { MessageBox } from '../messagebox/layout';
import { MessageContainer } from '../container';

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
