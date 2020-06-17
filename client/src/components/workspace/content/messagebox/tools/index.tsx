import * as React from 'react';
import { useRef, useEffect } from 'react';

// Blocks
import * as b from '../../../../../styles/blocks';

// Styles
import { Wrapper, IconWrapper, Seperator } from './index.styles';
import {
  Bolt,
  Bold,
  Italic,
  StrikeThrough,
  Code,
  Link,
  ListOl,
  ListUl,
  Indent,
  CodeBlock,
  FontCase,
  At,
  Smile,
  PaperClip,
  PaperPlane,
  EllipsisH,
} from '../../../../../assets/svg';
import { CustomEditor } from '../../../../../util/customEditor';
import { useParams } from 'react-router-dom';
import { useSendMessageMutation } from '../../../../../generated/graphql';

interface Props {
  editor: any;
  value: any;
}

export const MessageTools: React.FC<Props> = ({ editor, value }) => {
  const { channelId } = useParams();
  const [send] = useSendMessageMutation();
  let message = '';
  value.forEach((element: any, index: any) => {
    if (index === 0) {
      message = `${element.children[0].text}`;
      return;
    }
    message = `${message}<br>${element.children[0].text}`;
  });

  return (
    <Wrapper>
      <b.Flex>
        <b.Box className='container'>
          <b.Flex alignItems='center' justifyContent='space-between'>
            <b.Box>
              <b.Flex>
                <Tool
                  name='bolt'
                  icon={<Bolt />}
                  action={() => console.log('bolt pressed')}
                />
                <Seperator />
                <Tool
                  name='bold'
                  icon={<Bold />}
                  action={(event) => {
                    event.preventDefault();
                    CustomEditor.toggleBoldMark(editor);
                  }}
                />
                <Tool
                  name='italic'
                  icon={<Italic />}
                  action={() => console.log('italic pressed')}
                />
                <Tool
                  name='strike_through'
                  icon={<StrikeThrough />}
                  action={() => console.log('strike through pressed')}
                />
                <Tool
                  name='code'
                  icon={<Code />}
                  action={(event) => {
                    event.preventDefault();
                    CustomEditor.toggleCodeBlock(editor);
                  }}
                />
                <Tool
                  name='link'
                  icon={<Link />}
                  action={() => console.log('link pressed')}
                />
                <Tool
                  name='list_ol'
                  icon={<ListOl />}
                  action={() => console.log('list ol pressed')}
                />
                <Tool
                  name='list_ul'
                  icon={<ListUl />}
                  action={() => console.log('list ul pressed')}
                />
                <Tool
                  name='indent'
                  icon={<Indent />}
                  action={() => console.log('indent pressed')}
                />
                <Tool
                  name='code_block'
                  icon={<CodeBlock />}
                  action={() => console.log('code block pressed')}
                />
                <Tool
                  name='more'
                  icon={<EllipsisH />}
                  action={() => console.log('code block pressed')}
                />
              </b.Flex>
            </b.Box>
            <b.Box>
              <b.Flex>
                <Tool
                  name='font_case'
                  icon={<FontCase />}
                  action={() => console.log('font case block pressed')}
                />
                <Tool
                  name='at'
                  icon={<At />}
                  action={() => console.log('at pressed')}
                />
                <Tool
                  name='smile'
                  icon={<Smile />}
                  action={() => console.log('smile pressed')}
                />
                <Tool
                  name='paper_clip'
                  icon={<PaperClip />}
                  action={() => console.log('paperclip pressed')}
                />
                <IconWrapper
                  // disabled={!!input}
                  variants={sendVariant}
                  // animate={!!input ? 'animate' : 'initial'}
                  className='paper_plane'
                  onClick={async () => {
                    if (localStorage.getItem('teamId')) {
                      const response = await send({
                        variables: {
                          channelId,
                          teamId: localStorage.getItem('teamId')!,
                          body: message,
                        },
                      });
                      console.log('response', response);
                    }
                  }}>
                  <b.Flex justifyContent='center' alignItems='center'>
                    <PaperPlane />
                  </b.Flex>
                </IconWrapper>
              </b.Flex>
            </b.Box>
          </b.Flex>
        </b.Box>
      </b.Flex>
    </Wrapper>
  );
};

interface ToolProps {
  name: string;
  icon: React.ReactNode;
  action: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Tool: React.FC<ToolProps> = ({ name, icon, action }) => {
  return (
    <IconWrapper className={name} onMouseDown={action}>
      <b.Flex justifyContent='center' alignItems='center'>
        {icon}
      </b.Flex>
    </IconWrapper>
  );
};

// Animations
const sendVariant = {
  animate: {
    background: '#007A5A',
  },
  initial: {
    background: 'transparent',
  },
};

const sendTransition = {
  duration: 3,
  ease: 'easeInOut',
};
