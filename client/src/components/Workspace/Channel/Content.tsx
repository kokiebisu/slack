import * as React from 'react';

// Blocks
import * as b from 'global/blocks';

// Styles
import {
  Wrapper,
  Title,
  Description,
  Options,
  Option,
  IconWrapper,
} from 'styles/Workspace/Channel/Content';

// Svg
import { LayerPlus, UserPlus } from 'assets/svg';

// Components
import { useParams } from 'react-router-dom';
import { useGetChannelByIdQuery } from 'generated/graphql';

import { MessageContainer } from 'components/Workspace/Channel/Container';

export const Content = () => {
  const { channelId } = useParams();
  const { data: { getChannelById } = {} } = useGetChannelByIdQuery({
    variables: { channelId },
    fetchPolicy: 'cache-and-network',
  });

  return (
    <>
      <Wrapper>
        <b.Box className='section_header'>
          <Title mb={2}>
            {getChannelById?.channel && (
              <b.Text> #{getChannelById?.channel?.name}</b.Text>
            )}
          </Title>
          <Description>
            <b.Text>
              <b.Span className='creator'>
                @{getChannelById?.channel?.fullname}
              </b.Span>{' '}
              created this channel on{' '}
              {getChannelById?.channel?.createdAt
                .split(',')
                .slice(0, 2)
                .join(',')}
              . This is the very beginning of the{' '}
              <b.Span className='channel_name'>
                #{getChannelById?.channel?.name}
              </b.Span>{' '}
              channel. &nbsp;
              {getChannelById?.channel &&
                getChannelById?.channel.description &&
                `Description: ${getChannelById?.channel?.description}`}
              &nbsp;
              <b.Span>
                {getChannelById?.channel &&
                  getChannelById?.channel.description && (
                    <>
                      <b.Span>(</b.Span>
                      <b.Span className='edit_button'>edit</b.Span>
                      <b.Span>)</b.Span>
                    </>
                  )}
              </b.Span>
            </b.Text>
          </Description>
          <Options>
            <b.Flex alignItems='center'>
              <Option mr={2}>
                <b.Flex alignItems='center'>
                  <IconWrapper className='layer_plus' mr={2}>
                    <LayerPlus />
                  </IconWrapper>
                  <b.Box>
                    <b.Text>Add an app</b.Text>
                  </b.Box>
                </b.Flex>
              </Option>
              <Option>
                <b.Flex alignItems='center'>
                  <IconWrapper className='user_plus' mr={2}>
                    <UserPlus />
                  </IconWrapper>
                  <b.Box>
                    <b.Text>Add people</b.Text>
                  </b.Box>
                </b.Flex>
              </Option>
            </b.Flex>
          </Options>
        </b.Box>
        <MessageContainer />
      </Wrapper>
    </>
  );
};
