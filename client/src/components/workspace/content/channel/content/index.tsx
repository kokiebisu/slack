import * as React from 'react';

// Blocks
import * as b from '../../../../../styles/blocks';

// Styles
import {
  Wrapper,
  Title,
  Description,
  Options,
  Option,
  IconWrapper,
} from './index.styles';

// Svg
import { LayerPlus, UserPlus } from '../../../../../assets/svg';

// Components
import { Messages } from '../message/container';
import { DateSeperator } from '../DateSeperator';
import { useParams } from 'react-router-dom';
import {
  useGetChannelByIdQuery,
  useSubscribeToMessagesSubscription,
  useFetchMessagesQuery,
} from '../../../../../generated/graphql';
import { MessageBox } from '../../messagebox/layout';

import gql from 'graphql-tag';
import { useQuery, useSubscription } from 'react-apollo';

export const Content = () => {
  const { channelId } = useParams();
  // Queries
  const { data: { getChannelById } = {} } = useGetChannelByIdQuery({
    variables: { channelId },
  });

  const FETCH_MESSAGES = gql`
    query FetchMessages($channelId: String!) {
      fetchMessages(channelId: $channelId) {
        messages {
          channelId
          fullname
          body
          avatarBackground
        }
      }
    }
  `;

  const SUBSCRIBE_TO_MESSAGES = gql`
    subscription SubscribeToMessages($id: String!) {
      subscribeToMessages(id: $id) {
        fullname
        channelId
        body
        avatarBackground
      }
    }
  `;
  const { subscribeToMore, data } = useQuery(FETCH_MESSAGES, {
    variables: { channelId },
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
              <b.Span className='creator'>@Chihiro Hasegawa</b.Span> created
              this channel on June 5th. This is the very beginning of the{' '}
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
        <DateSeperator />

        <b.Box className='section_content'>
          {data && (
            <Messages
              data={data}
              subscribeToNewMessages={() =>
                subscribeToMore({
                  document: SUBSCRIBE_TO_MESSAGES,
                  variables: { id: channelId },
                  updateQuery: (prev, { subscriptionData }) => {
                    if (!subscriptionData.data) return prev;
                    const newMessage =
                      subscriptionData.data.subscribeToMessages;
                    return Object.assign({}, prev, {
                      fetchMessages: {
                        messages: [newMessage, ...prev.fetchMessages.messages],
                      },
                    });
                  },
                })
              }
            />
          )}
        </b.Box>

        <MessageBox />
      </Wrapper>
    </>
  );
};
