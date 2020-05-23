import React from 'react';
import styled from 'styled-components';

import { Box, Flex, Text } from '../../styles/blocks';

export const Message = () => {
  return (
    <Box py={2}>
      <Flex alignItems='center'>
        <Box pr={2}>
          <Status />
        </Box>
        <Box style={{ top: 3 }}>
          <Text fontFamily='Segoe' color='#CFC3CF' fontSize={15}>
            Slackbot
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

const Status = styled(Box)`
  width: 10px;
  height: 10px;
  background-color: #2bac76;
  border-radius: 100%;
`;
