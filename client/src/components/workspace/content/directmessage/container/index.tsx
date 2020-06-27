import React from 'react';
import { useEffect } from 'react';

import * as b from '../../../../../styles/blocks';

import { useParams } from 'react-router-dom';

// Components
import { MessageHeader } from '../messageheader';

// Styles
import { Wrapper } from './index.styles';

// Queries
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { DateSeperator } from '../../DateSeperator';
import { Messages } from '../../message/container';

export const MessageContainer = () => {
  const { userId } = useParams();
  console.log('message cotainer', userId);

  useEffect(() => {
    const unsubscribe = subscribeToNewMessages(userId);
    return () => {
      unsubscribe();
    };
  }, [userId]);

  const SUBSCRIBE_TO_DIRECT_MESSAGES = gql`
    subscription SubscribeToDirectMessages($fromId: String!) {
      subscribeToDirectMessages(fromId: $fromId) {
        id
        fullname
        body
        avatarBackground
        createdAt
      }
    }
  `;

  const FETCH_DIRECT_MESSAGES = gql`
    query FetchDirectMessages($fromId: String!) {
      fetchDirectMessages(fromId: $fromId) {
        id
        fullname
        body
        avatarBackground
        createdAt
      }
    }
  `;

  const {
    subscribeToMore,
    data: fetchDirectMessagesData,
    loading: fetchDirectMessagesLoading,
  } = useQuery(FETCH_DIRECT_MESSAGES, {
    variables: { fromId: userId },
    fetchPolicy: 'cache-and-network',
  });

  const subscribeToNewMessages = (latestUser: string) =>
    subscribeToMore({
      document: SUBSCRIBE_TO_DIRECT_MESSAGES,
      variables: { fromId: latestUser },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newMessage = subscriptionData.data.subscribeToMessages;
        return Object.assign({}, prev, {
          fetchDirectMessages: [...prev.fetchDirectMessages, newMessage],
        });
      },
    });

  // this gives an object with dates as keys

  console.log('fetch', fetchDirectMessagesData);

  type tplotOptions = {
    [key: string]: boolean;
  };

  let messagesByDates;

  if (!fetchDirectMessagesLoading && fetchDirectMessagesData) {
    let groups: tplotOptions = fetchDirectMessagesData.fetchDirectMessages.reduce(
      (groups: any, message: any) => {
        const createdAt = message.createdAt.split(',').slice(0, 2);
        if (!groups[createdAt]) {
          groups[createdAt] = [];
        }
        groups[createdAt].push(message);
        return groups;
      },
      {}
    );
    messagesByDates = Object.keys(groups).map((createdAt) => {
      return {
        createdAt,
        messages: groups[createdAt],
      };
    });
  }

  return (
    <Wrapper>
      <MessageHeader />
      {messagesByDates &&
        messagesByDates.map((element, index) => {
          return (
            <React.Fragment key={index}>
              <DateSeperator
                date={element.createdAt.split(',').slice(0, 2).join(', ')}
              />
              <b.Box className='section_content'>
                <Messages messages={element.messages} />
              </b.Box>
            </React.Fragment>
          );
        })}
    </Wrapper>
  );
};
