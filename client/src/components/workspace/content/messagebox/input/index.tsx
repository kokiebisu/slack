import * as React from 'react';
import { useMemo, useState } from 'react';
import * as b from '../../../../../styles/blocks';

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
