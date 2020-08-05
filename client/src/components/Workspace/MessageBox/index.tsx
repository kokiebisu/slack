import * as React from 'react';
import { useState } from 'react';

import 'draft-js/dist/Draft.css';
// Blocks
import * as b from 'global/blocks';

// Styles
import {
  Wrapper,
  Content,
  CommandDescription,
} from 'styles/Workspace/MessageBox/';

// Components
import { useGetChannelByIdQuery } from 'generated/graphql';
import { useParams } from 'react-router-dom';
import { MyEditor } from './Editor';

export const MessageBox = () => {
  // const { channelId } = useParams();
  return (
    <Wrapper>
      <b.Box>
        <MyEditor />
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
