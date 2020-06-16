import * as React from 'react';

import { useState, useMemo } from 'react';
import { Node } from 'slate';

// Blocks
import * as b from '../../../../../styles/blocks';

// Styles
import { Wrapper, Content } from './index.styles';

import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

// Components
import { MessageInput } from '../input';
import { MessageTools } from '../tools';

export const MessageBox = () => {
  const [value, setValue] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]);

  const editor = useMemo(() => withReact(createEditor()), []);

  return (
    <Wrapper>
      <b.Box>
        <Content>
          <MessageInput>
            <Slate
              editor={editor}
              value={value}
              onChange={(newValue) => setValue(newValue)}>
              <Editable
                onKeyDown={(event) => console.log('keydown', event.key)}
              />
            </Slate>
          </MessageInput>
          <MessageTools
            // input={value}
            send={(e) => {
              e.preventDefault();
              console.log('input', value);
            }}
          />
        </Content>
      </b.Box>
    </Wrapper>
  );
};
