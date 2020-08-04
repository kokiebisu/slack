import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as b from 'global/blocks';
import { DateSeperator } from 'components/Workspace/Content/DateSeperator';
import { Messages } from 'components/Workspace/Content/Messages';
import { Wrapper } from 'styles/Workspace/Channel/Container';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const MessageContainer = () => {
  const { channelId } = useParams();

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

  useEffect(() => {
    const unsubscribe = subscribeToNewMessages(channelId);
    return () => {
      unsubscribe();
    };
  }, [channelId, subscribeToNewMessages]);

  const SUBSCRIBE_TO_MESSAGES = gql`
    subscription SubscribeToMessages($channelID: String!) {
      subscribeToMessages(channelID: $channelID) {
        id
        fullname
        body
        avatarBackground
        createdAt
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
        createdAt
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

  // this gives an object with dates as keys

  type tplotOptions = {
    [key: string]: boolean;
  };

  let messagesByDates;

  if (!fetchMessagesLoading && fetchMessagesData) {
    let groups: tplotOptions = fetchMessagesData.fetchMessages.reduce(
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
    <>
      <Wrapper>
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
    </>
  );
};
