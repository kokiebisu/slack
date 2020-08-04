import React from 'react';

// Components
import { MessageBox } from 'components/Workspace/DirectMessage/MessageBox/layout';
import { MessageContainer } from 'components/Workspace/DirectMessage/Container';

// Styles
import { Wrapper } from 'styles/Workspace/DirectMessage/Container';

export const Content = () => {
  return (
    <Wrapper>
      <MessageContainer />
      <MessageBox />
    </Wrapper>
  );
};
