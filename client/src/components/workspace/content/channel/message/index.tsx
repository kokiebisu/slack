import * as React from 'react';

// Blocks
import * as b from '../../../../../styles/blocks';

// Styles
import { Profile, IconWrapper, Top } from './index.styles';

// Components
import { MessageJoined } from './event';
import { MessageBody } from './message';

import { UserAlt } from '../../../../../assets/svg';

interface Props {
  sender: string;
  avatar: string;
  time: string;
  body: Body;
}

interface Body {
  type: string;
  message?: string;
}

export const Message: React.FC<Props> = ({ sender, avatar, time, body }) => {
  return (
    <b.Box mb={3}>
      <b.Flex>
        <b.Box mr={2}>
          <Profile backgroundColor={avatar} mr={2}>
            <IconWrapper className='avatar'>
              <UserAlt />
            </IconWrapper>
          </Profile>
        </b.Box>
        <b.Box>
          <Top>
            <b.Flex alignItems='center'>
              <b.Box className='sender_name' mr={2}>
                <b.Text>{sender}</b.Text>
              </b.Box>
              <b.Box className='sent_time'>
                <b.Text>{time.split(',')[2]}</b.Text>
              </b.Box>
            </b.Flex>
          </Top>
          {renderBody(body)}
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};

const renderBody = (body: Body) => {
  switch (body.type) {
    case 'joined':
      return <MessageJoined />;
    case 'message':
      return <MessageBody text={body.message!} />;
    default:
      return;
  }
};
