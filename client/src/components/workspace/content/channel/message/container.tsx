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

interface Props {
  messages: any;
  subscribeToNewMessages: any;
  // data: any;
}

interface DisplayingMessage {
  channelId: string;
  fullname: string;
  body: string;
  avatarBackground: string;
}

export const Messages: React.FC<Props> = ({
  subscribeToNewMessages,
  messages,
}) => {
  useEffect(() => {
    subscribeToNewMessages();
    scrollRef.scrollIntoView;
  }, []);

  const scrollRef = useRef(null);

  console.log('messsss', messages);

  return (
    <Wrapper ref={scrollRef}>
      {messages &&
        messages.fetchMessages.map(
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
