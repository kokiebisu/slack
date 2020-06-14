import * as React from 'react';
import * as b from '../../../../../styles/blocks';
import { Wrapper } from './container.styles';
import { Message } from '.';

export const Messages = () => {
  const messages = [
    {
      name: 'kenichi okiebisu',
      time: '12:06AM',
      body: 'this is ken',
    },
  ];
  return (
    <Wrapper>
      {messages.map((message) => {
        return (
          <Message
            name={message.name}
            time={message.time}
            body={message.body}
          />
        );
      })}
    </Wrapper>
  );
};
