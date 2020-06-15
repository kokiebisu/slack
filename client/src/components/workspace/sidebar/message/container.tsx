import * as React from 'react';
import * as b from '../../../../styles/blocks';

// Styles
import { Message } from '.';
import { Heart } from '../../../../assets/svg/Heart';
import { IconWrapper, SlackBot } from './container.styles';

interface Props {}

export const Messages: React.FC<Props> = () => {
  return (
    <b.Box>
      <SlackBot py={2}>
        <b.Flex alignItems='center'>
          <IconWrapper className='heart' pr={2}>
            <Heart />
          </IconWrapper>
          <b.Box style={{ top: 3 }}>
            <b.Text
              fontFamily='SlackLato-Light'
              color='pink__lighter'
              fontSize={15}>
              Slackbot
            </b.Text>
          </b.Box>
        </b.Flex>
      </SlackBot>
      <Message />
    </b.Box>
  );
};
