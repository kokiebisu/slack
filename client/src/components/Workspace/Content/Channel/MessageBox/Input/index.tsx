import * as React from 'react';

// Blocks
import * as b from '../../../../../../styles/blocks';

// Styles
import { Wrapper } from './index.styles';

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
