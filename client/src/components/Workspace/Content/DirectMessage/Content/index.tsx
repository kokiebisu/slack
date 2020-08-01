import React from 'react';

// Components
import { MessageBox } from 'components/Workspace/Content/DirectMessage/MessageBox/layout';
import { MessageContainer } from 'components/Workspace/Content/DirectMessage/Container';

// Styles
import { Wrapper } from 'components/Workspace/Content/DirectMessage/Content/index.styles';

export const Content = () => {
  return (
    <Wrapper>
      <MessageContainer />
      <MessageBox />
    </Wrapper>
  );
};
