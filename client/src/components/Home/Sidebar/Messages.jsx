import React from 'react';

import { Heart } from '../../../assets/svg/SidebarSections';

import { Flex, Text, Box } from '../../../styles/blocks';
import { Message } from './Message';

export const Messages = () => {
  return (
    <Box pl={2}>
      <Box py={2}>
        <Flex alignItems='center'>
          <Box pr={2}>
            <Heart width={10} height={10} color='#2BAC76' />
          </Box>
          <Box style={{ top: 3 }}>
            <Text fontFamily='Segoe' color='#CFC3CF' fontSize={15}>
              Slackbot
            </Text>
          </Box>
        </Flex>
      </Box>
      <Message />
    </Box>
  );
};
