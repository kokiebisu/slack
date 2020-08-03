import * as React from 'react';

// Blocks
import * as b from 'global/blocks';

// Styles
import { Wrapper } from 'components/Workspace/Content/DirectMessage/MessageBox/input/index.styles';

interface Props {
  children: React.ReactNode;
}

export const MessageInput: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <b.Flex alignItems='center'>{children}</b.Flex>
    </Wrapper>
  );
};
