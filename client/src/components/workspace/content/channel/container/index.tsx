import React, { useEffect } from 'react';
import * as b from '../../../../../styles/blocks';

// Components
import { DateSeperator } from '../DateSeperator';
import { Messages } from '../message/container';
import { useFetchMessagesQuery } from '../../../../../generated/graphql';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const MessageContainer = () => {
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
        createdOn
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
        createdOn
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

  let messagesByDates;

  // this gives an object with dates as keys

  type tplotOptions = {
    [key: string]: boolean;
  };

  if (!fetchMessagesLoading && fetchMessagesData) {
    let groups: tplotOptions = fetchMessagesData.fetchMessages.reduce(
      (groups: any, message: any) => {
        const createdOn = message.createdOn.split('T')[0];
        if (!groups[createdOn]) {
          groups[createdOn] = [];
        }
        groups[createdOn].push(message);
        return groups;
      },
      {}
    );
    messagesByDates = Object.keys(groups).map((createdOn) => {
      return {
        createdOn,
        messages: groups[createdOn],
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
                <DateSeperator date={element.createdOn} />
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

const Wrapper = styled(b.Box)`
  padding: 30px 0;
`;
