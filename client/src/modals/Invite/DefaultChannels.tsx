import * as React from 'react';

// Blocks
import * as b from 'global/blocks';

// Styles
import {
  Wrapper,
  Header,
  ChannelInput,
  IconWrapper,
  Description,
  Share,
} from 'components/Workspace/InviteModal/DefaultChannels/index.styles';

// Svgs
import { Link } from 'assets/svg';

export const DefaultChannels = () => {
  return (
    <Wrapper>
      <Header>
        <b.Text>Default Channels</b.Text>
      </Header>
      <ChannelInput>
        <input />
      </ChannelInput>
      <Description>
        <b.Text>
          New <span>members</span> will automatically join these channels and
          #general <span>change defaults</span>
        </b.Text>
      </Description>
      <Share>
        <b.Flex>
          <IconWrapper className='link' mr={1}>
            <Link />
          </IconWrapper>
          <b.Box>
            <b.Text>Share invite link</b.Text>
          </b.Box>
        </b.Flex>
      </Share>
    </Wrapper>
  );
};
