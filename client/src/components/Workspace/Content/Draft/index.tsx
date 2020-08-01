import * as React from 'react';

// Blocks
import * as b from 'styles/blocks';

// Svg
import { Clipboard } from 'assets/svg';

import {
  Wrapper,
  Content,
  IconWrapper,
  Title,
  Description,
  NewMessage,
} from 'components/Workspace/Content/Draft/index.styles';
import { ClientContentLayout } from 'components/Workspace/Content/Layout';

interface Props {}

export const DraftPage: React.FC<Props> = () => {
  return (
    <ClientContentLayout
      section='Drafts'
      subsection='No drafts'
      content={<ContentLayout />}
    />
  );
};

const ContentLayout = () => {
  return (
    <Wrapper>
      <b.Flex justifyContent='center' alignItems='center'>
        <Content>
          <IconWrapper className='clipboard'>
            <Clipboard />
          </IconWrapper>
          <Title pt={3} pb={2}>
            <b.Text>Draft messages to send when you’re ready</b.Text>
          </Title>
          <Description>
            <b.Text>
              Start typing a message anywhere, then find it here. Re-read,
              revise, and send whenever you’d like.
            </b.Text>
          </Description>
          <NewMessage mt={3} py={2} px={2} borderRadius={5}>
            <b.Text>New Message</b.Text>
          </NewMessage>
        </Content>
      </b.Flex>
    </Wrapper>
  );
};
