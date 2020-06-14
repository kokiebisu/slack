import * as React from 'react';
import * as b from '../../../../../styles/blocks';
import { Wrapper } from './container.styles';
import { Message } from '.';

export const Messages = () => {
  const messages = [
    {
      sender: 'Chihiro Hasegawa',
      time: '12:04 AM',
      body: {
        type: 'joined',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
    {
      sender: 'Kenichi Okiebisu',
      time: '12:48 AM',
      body: {
        type: 'message',
      },
    },
  ];
  return (
    <Wrapper>
      {messages.map((message) => {
        return (
          <Message
            sender={message.sender}
            time={message.time}
            body={message.body}
          />
        );
      })}
    </Wrapper>
  );
};
