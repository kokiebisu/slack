import * as React from 'react';

import { useState, useMemo, useCallback } from 'react';

// Blocks
import * as b from '../../../../../../styles/blocks';

// Styles
import { Wrapper, Content, CommandDescription } from './index.styles';

import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

// Components
import { MessageInput } from '../input';
import { MessageTools } from '../tools';
import { CustomEditor } from '../../../../../../util/customEditor';
import { useGetChannelByIdQuery } from '../../../../../../generated/graphql';
import { useParams } from 'react-router-dom';

export const MessageBox = () => {
  const { channelId } = useParams();

  const { data, loading } = useGetChannelByIdQuery({
    variables: { channelId },
  });
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<any>(
    localStorage.getItem(`${channelId}`)
      ? JSON.parse(localStorage.getItem(`${channelId}`)!)
      : [
          {
            type: 'paragraph',
            children: [{ text: '' }],
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
              className='slate'
              editor={editor}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
                const content = JSON.stringify(value);
                localStorage.setItem(`${channelId}`, content);
              }}>
              {!loading && data?.getChannelById.ok && (
                <Editable
                  data-channel-name={`Message #${data?.getChannelById.channel?.name}`}
                  aria-label={`Message #${data?.getChannelById.channel?.name}`}
                  placeholder={`Jot down your thoughts...`}
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
                        break;
                      }

                      case 'b': {
                        event.preventDefault();
                        CustomEditor.toggleBoldMark(editor);
                        break;
                      }
                    }
                  }}
                />
              )}
            </Slate>
          </MessageInput>
          <MessageTools
            editor={editor}
            value={value}
            resetValue={() => {
              setValue([
                {
                  type: 'paragraph',
                  children: [{ text: '' }],
                },
              ]);
              localStorage.setItem(`${channelId}`, '');
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
