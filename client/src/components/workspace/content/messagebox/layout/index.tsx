import * as React from 'react';

// Blocks
import * as b from '../../../../../styles/blocks';

// Styles
import { Wrapper, Content } from './index.styles';

// Components
import { MessageInput } from '../input';
import { MessageTools } from '../tools';
import { useState } from 'react';

export const MessageBox = () => {
  const [input, setInput] = useState('');
  return (
    <Wrapper>
      <b.Box>
        <Content>
          <MessageInput
            input={input}
            onType={(e: React.FormEvent<HTMLDivElement>) =>
              setInput(e.currentTarget.innerText)
            }
          />
          <MessageTools
            input={input}
            send={(e) => {
              e.preventDefault();
              console.log('input', input);
            }}
          />
        </Content>
      </b.Box>
    </Wrapper>
  );
};
