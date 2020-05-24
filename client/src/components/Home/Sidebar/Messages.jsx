import React from 'react';

import { Heart } from '../../../assets/svg/SidebarSections';

import * as b from '../../../styles/blocks';
import { Message } from './Message';

export const Messages = () => {
  return (
    <b.Box pl={2}>
      <b.Box py={2}>
        <b.Flex alignItems='center'>
          <b.Box pr={2}>
            <Heart width={10} height={10} color='#2BAC76' />
          </b.Box>
          <b.Box style={{ top: 3 }}>
            <b.Text fontFamily='Segoe' color='#CFC3CF' fontSize={15}>
              Slackbot
            </b.Text>
          </b.Box>
        </b.Flex>
      </b.Box>
      <Message />
    </b.Box>
  );
};
