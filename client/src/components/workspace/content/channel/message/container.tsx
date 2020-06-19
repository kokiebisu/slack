import * as React from 'react';
import { useParams } from 'react-router-dom';

// Query

// Styles
import { Wrapper } from './container.styles';

// Components
import { Message } from '.';
import {
  useSubscribeToMessagesSubscription,
  useFetchMessagesQuery,
} from '../../../../../generated/graphql';
import { useEffect, useRef } from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

interface Props {}

interface DisplayingMessage {
  id: number;
  fullname: string;
  avatarBackground: string;
  body: string;
}

export const Messages: React.FC<Props> = () => {
  const { channelId } = useParams();
  useEffect(() => {
    const unsubscribe = subscribeToNewMessages(channelId);
    return () => {
      unsubscribe();
    };
  }, [channelId]);

  const SUBSCRIBE_TO_MESSAGES = gql`
    subscription SubscribeToMessages($channelID: String!) {
      subscribeToMessages(channelID: $channelID) {
        id
        fullname
        body
        avatarBackground
      }
    }
  `;

  const FETCH_MESSAGES = gql`
    query FetchMessages($channelId: String!) {
      fetchMessages(channelId: $channelId) {
        id
        fullname
        body
        avatarBackground
      }
    }
  `;

  const {
    subscribeToMore,
    data: fetchMessagesData,
    loading: fetchMessagesLoading,
  } = useQuery(FETCH_MESSAGES, {
    variables: { channelId },
    fetchPolicy: 'cache-and-network',
  });

  const subscribeToNewMessages = (latestChannel: string) =>
    subscribeToMore({
      document: SUBSCRIBE_TO_MESSAGES,
      variables: { channelID: latestChannel },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newMessage = subscriptionData.data.subscribeToMessages;
        return Object.assign({}, prev, {
          fetchMessages: [...prev.fetchMessages, newMessage],
        });
      },
    });

  if (fetchMessagesData) {
    console.log('log', fetchMessagesData.fetchMessages);
  }

  return (
    <Wrapper>
      {fetchMessagesData &&
        fetchMessagesData.fetchMessages.map(
          (message: DisplayingMessage, index: number) => {
            return (
              <Message
                key={index}
                sender={message.fullname}
                avatar={message.avatarBackground}
                time='not coded'
                body={{ type: 'message', message: message.body }}
              />
            );
          }
        )}
    </Wrapper>
  );
};
