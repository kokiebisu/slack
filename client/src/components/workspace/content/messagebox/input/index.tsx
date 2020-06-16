import * as React from 'react';
import { useState } from 'react';
import * as b from '../../../../../styles/blocks';

import { Wrapper, Input } from './index.styles';

export const MessageInput = () => {
  const [input, setInput] = useState('');
  return (
    <Wrapper>
      <b.Flex alignItems='center'>
        <Input contentEditable='true' spellCheck aria-autocomplete='list'>
          <b.Text>sadfsda</b.Text>
        </Input>
      </b.Flex>
    </Wrapper>
  );
};
