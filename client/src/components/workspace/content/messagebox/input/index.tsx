import * as React from 'react';
import { useMemo, useState } from 'react';
import * as b from '../../../../../styles/blocks';

import { Wrapper, Input } from './index.styles';

interface Props {
  children: React.ReactNode;
}

export const MessageInput: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <b.Flex alignItems='center'>
        {/* <Input
          contentEditable='true'
          spellCheck
          aria-autocomplete='list'
          data-placeholder='Jot something down...'
          suppressContentEditableWarning={true}
          onInput={onType}
        /> */}
        {children}
      </b.Flex>
    </Wrapper>
  );
};
