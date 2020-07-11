import * as React from 'react';

// Styles
import { Wrapper } from './container.styles';

// Components
import { Message } from '.';

interface Props {
  messages: any;
}

interface DisplayingMessage {
  id: number;
  fullname: string;
  avatarBackground: string;
  body: string;
  createdAt: string;
}

export const Messages: React.FC<Props> = ({ messages }) => {
  return (
    <Wrapper>
      {messages.map((message: DisplayingMessage, index: number) => {
        return (
          <Message
            key={index}
            sender={message.fullname}
            avatar={message.avatarBackground}
            time={message.createdAt}
            body={{ type: 'message', message: message.body }}
          />
        );
      })}
    </Wrapper>
  );
};
