import * as React from 'react';

import { useState, useMemo, useCallback } from 'react';
import { Node, Editor, Transforms } from 'slate';

// Blocks
import * as b from '../../../../../styles/blocks';

// Styles
import { Wrapper, Content, CommandDescription } from './index.styles';

import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

// Components
import { MessageInput } from '../input';
import { MessageTools } from '../tools';

export const MessageBox = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [{ text: 'Jot down something...' }],
    },
  ]);

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

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
                renderElement={renderElement}
                onKeyDown={(event) => {
                  if (event.key === '`' && event.ctrlKey) {
                    event.preventDefault();
                    const [match] = Editor.nodes(editor, {
                      match: (n) => n.type === 'code',
                    });
                    Transforms.setNodes(
                      editor,
                      { type: match ? 'paragraph' : 'code' },
                      { match: (n) => Editor.isBlock(editor, n) }
                    );
                  }

                  if (event.key === '&') {
                    event.preventDefault();
                    editor.insertText('and');
                  }
                }}
              />
            </Slate>
          </MessageInput>
          <MessageTools
            // input={value}
            send={(e) => {
              if (e.key === '&') {
                e.preventDefault();
                console.log('called');
                editor.insertText('and');
              }
            }}
          />
        </Content>
        <CommandDescription py={2}>
          <b.Flex justifyContent='flex-end'>
            <b.Box>
              <b.Flex>
                <b.Box mr={3}>
                  <b.Text>
                    <b.Span>Return</b.Span> to send
                  </b.Text>
                </b.Box>
                <b.Box>
                  <b.Text>
                    <b.Span>Shift + Return</b.Span> to add a new line
                  </b.Text>
                </b.Box>
              </b.Flex>
            </b.Box>
          </b.Flex>
        </CommandDescription>
      </b.Box>
    </Wrapper>
  );
};

const CodeElement = (props: any) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const DefaultElement = (props: any) => {
  return <p {...props.attributes}>{props.children}</p>;
};
