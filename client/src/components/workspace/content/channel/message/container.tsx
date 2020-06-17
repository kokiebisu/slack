import * as React from 'react';
import { useParams } from 'react-router-dom';

// Query
import { useFetchMessagesQuery } from '../../../../../generated/graphql';

// Blocks
import * as b from '../../../../../styles/blocks';

// Styles
import { Wrapper } from './container.styles';

// Components
import { Message } from '.';

export const Messages = () => {
  // fetch all messages in channel based on channel id

  const { channelId } = useParams();
  const { data, loading, error } = useFetchMessagesQuery({
    variables: {
      channelId,
    },
  });

  const messages = [
    {
      fullname: 'Chihiro Hasegawa',
      time: '12:04 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
    {
      fullname: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
        message: 'hello this ie ken',
      },
    },
  ];
  return (
    <Wrapper>
      {data?.fetchMessages &&
        data.fetchMessages.messages &&
        data.fetchMessages.messages.map((message) => {
          return (
            <Message
              sender={message.fullname}
              time='not coded'
              body={{ type: 'message', message: message.body }}
            />
          );
        })}
      {/* {messages.map((message) => {
        return (
          <Message
            sender={message.fullname}
            time='not coded'
            body={{ type: 'message', message: message.body.type }}
          />
        );
      })} */}
    </Wrapper>
  );
};
