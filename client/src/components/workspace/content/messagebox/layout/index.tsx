import * as React from 'react';

// Blocks
import * as b from '../../../../../styles/blocks';

// Styles
import { Wrapper, Content } from './index.styles';

// Components
import { MessageInput } from '../input';
import { MessageTools } from '../tools';

export const MessageBox = () => {
  return (
    <Wrapper>
      <b.Box>
        <Content>
          <MessageInput />
          <MessageTools />
        </Content>
      </b.Box>
    </Wrapper>
  );
};
