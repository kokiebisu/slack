import React from 'react';

import { Box, Flex, Text } from '../../../../../Blocks';

export const Option = ({ children, name }) => {
  return (
    <Box py={1} px={3}>
      <Flex alignItems='center'>
        <Box>{children}</Box>
        <Box ml={3}>
          <Text fontFamily='Lato' color='#CFC3CF'>
            {name}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
