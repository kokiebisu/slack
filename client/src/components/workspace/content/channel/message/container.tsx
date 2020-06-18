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
import { useEffect } from 'react';

export const Messages = () => {
  // fetch all messages in channel based on channel id
  // useEffect(() => {
  //   // subscribeToMore({
  //   //   document: UPDATE_MESSAGE,
  //   //   updateQuery: (prev, { subscriptionData }) => {
  //   //     if (!subscriptionData.data) return prev;
  //   //     return {
  //   //       allMessages: [
  //   //         subscriptionData.,
  //   //         ...prev.allMessages,
  //   //       ],
  //   //     };
  //   //   },
  //   // });
  //   subscribeToNewMessages();
  // });

  // const { channelId } = useParams();
  // const { data } = useFetchMessagesQuery({
  //   variables: {
  //     channelId,
  //   },
  // });
  // const { data } = useFetchMessagesSubscription();
  // const { data } = useSubscribeToMessagesSubscription();
  // const { subscribeToMore } = useFetchMessagesQuery({
  //   variables: {
  //     channelId,
  //   },
  //   fetchPolicy: 'cache-and-network',
  // });

  return (
    <Wrapper>
      {/* {data &&
        data.subscribeToMessages &&
        data.subscribeToMessages.messages &&
        data.subscribeToMessages.messages.map((message) => {
          return (
            <Message
              key={message.id}
              sender={message.fullname}
              avatar={message.avatarBackground}
              time='not coded'
              body={{ type: 'message', message: message.body }}
            />
          );
        })} */}
    </Wrapper>
  );
};
