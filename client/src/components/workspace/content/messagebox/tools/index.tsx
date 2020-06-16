import * as React from 'react';

// Blocks
import * as b from '../../../../../styles/blocks';

// Styles
import { Wrapper, IconButtonWrapper, Seperator } from './index.styles';
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
} from '../../../../../assets/svg';

export const MessageTools = () => {
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
                  action={() => console.log('bold pressed')}
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
                  action={() => console.log('code pressed')}
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
                <Tool
                  name='paper_plane'
                  icon={<PaperPlane />}
                  action={() => console.log('paper plane pressed')}
                />
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
  action: () => void;
}

const Tool: React.FC<ToolProps> = ({ name, icon, action }) => {
  return (
    <IconButtonWrapper className={name} onClick={action}>
      <b.Flex justifyContent='center' alignItems='center'>
        {icon}
      </b.Flex>
    </IconButtonWrapper>
  );
};
