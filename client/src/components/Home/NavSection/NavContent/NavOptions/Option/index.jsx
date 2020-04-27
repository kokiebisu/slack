import React from 'react';

import { Box, Flex, Text } from '../../../../../Blocks';

export const Option = ({ children, name }) => {
  return (
    <Box py={2} px={2}>
      <Flex alignItems='center'>
        <Box>{children}</Box>
        <Box ml={2}>
          <Text fontFamily='Lato' color='#CFC3CF'>
            {name}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
