import * as React from 'react';
import { useParams } from 'react-router-dom';

// Query
import { useFetchMessagesQuery } from '../../../../../generated/graphql';

// Styles
import { Wrapper } from './container.styles';

// Components
import { Message } from '.';

export const Messages = () => {
  // fetch all messages in channel based on channel id

  const { channelId } = useParams();
  const { data } = useFetchMessagesQuery({
    variables: {
      channelId,
    },
  });

  return (
    <Wrapper>
      {data?.fetchMessages &&
        data.fetchMessages.messages &&
        data.fetchMessages.messages.map((message) => {
          return (
            <Message
              key={message.id}
              sender={message.fullname}
              avatar={message.avatarBackground}
              time='not coded'
              body={{ type: 'message', message: message.body }}
            />
          );
        })}
    </Wrapper>
  );
};
