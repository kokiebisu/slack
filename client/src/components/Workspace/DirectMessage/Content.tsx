import React from 'react';

// Components
import { MessageContainer } from 'components/Workspace/DirectMessage/Container';
import { MessageBox } from 'components/Workspace/MessageBox';

// Styles
import { Wrapper } from 'styles/Workspace/DirectMessage/Content';

export const Content = () => {
  return (
    <Wrapper>
      <MessageContainer />
      {/* <MessageBox /> */}
    </Wrapper>
  );
};
