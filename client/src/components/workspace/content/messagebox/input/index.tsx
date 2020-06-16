import * as React from 'react';
import { useState } from 'react';
import * as b from '../../../../../styles/blocks';

import { Wrapper, Input } from './index.styles';

interface Props {
  input: string;
  onType: (e: React.FormEvent<HTMLDivElement>) => void;
}

export const MessageInput: React.FC<Props> = ({ input, onType }) => {
  return (
    <Wrapper>
      <b.Flex alignItems='center'>
        <Input
          contentEditable='true'
          spellCheck
          aria-autocomplete='list'
          data-placeholder='Jot something down...'
          suppressContentEditableWarning={true}
          onInput={onType}
        />
      </b.Flex>
    </Wrapper>
  );
};
