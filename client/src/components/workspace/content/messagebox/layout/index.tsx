import * as React from 'react';

import { useState, useMemo, useCallback } from 'react';
import { Text, Node, Editor, Transforms } from 'slate';

// Blocks
import * as b from '../../../../../styles/blocks';

// Styles
import { Wrapper, Content, CommandDescription } from './index.styles';

import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

// Components
import { MessageInput } from '../input';
import { MessageTools } from '../tools';
import { CustomEditor } from '../../../../../util/customEditor';

export const MessageBox = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<any>(
    localStorage.getItem('content')
      ? JSON.parse(localStorage.getItem('content')!)
      : [
          {
            type: 'paragraph',
            children: [{ text: 'Jot down something...' }],
          },
        ]
  );

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  // Define a leaf rendering function that is memoized with `useCallback`.
  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <Wrapper>
      <b.Box>
        <Content>
          <MessageInput>
            <Slate
              editor={editor}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
                const content = JSON.stringify(value);
                localStorage.setItem('content', content);
              }}>
              <Editable
                renderLeaf={renderLeaf}
                renderElement={renderElement}
                onKeyDown={(event) => {
                  if (!event.ctrlKey) {
                    return;
                  }

                  switch (event.key) {
                    case '`': {
                      event.preventDefault();
                      CustomEditor.toggleCodeBlock(editor);
                    }

                    case 'b': {
                      event.preventDefault();
                      CustomEditor.toggleBoldMark(editor);
                      break;
                    }
                  }
                }}
              />
            </Slate>
          </MessageInput>
          <MessageTools editor={editor} />
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

// Define a React component to render leaves with bold text.
const Leaf = (props: any) => {
  return (
    <span
      {...props.attributes}
      style={{
        fontWeight: props.leaf.bold ? '700' : '400',
      }}>
      {props.children}
    </span>
  );
};
