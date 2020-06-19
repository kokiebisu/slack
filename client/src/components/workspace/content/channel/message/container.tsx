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

interface Props {
  // messages:
  //   | ({ __typename?: 'DisplayingMessage' | undefined } & Pick<
  //       DisplayingMessage,
  //       'channelId' | 'body' | 'fullname' | 'avatarBackground'
  //     >)[]
  //   | null
  //   | undefined;
  subscribeToNewMessages: any;
  data: any;
}

interface DisplayingMessage {
  channelId: string;
  fullname: string;
  body: string;
  avatarBackground: string;
}

export const Messages: React.FC<Props> = ({ subscribeToNewMessages, data }) => {
  useEffect(() => {
    subscribeToNewMessages();
    console.log('result', data);
  });

  console.log('result', data);

  return (
    <Wrapper>
      {/* {messages &&
        messages.map((message, index) => {
          return (
            <Message
              key={index}
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
