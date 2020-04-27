import * as React from 'react';

// Component
import { Team } from './Team';

// Block
import { Box, Flex } from '../../Blocks';

export const TeamSection = () => {
  return (
    <Box paddingTop={20}>
      <Flex flexDirection='column' alignItems='center'>
        <Box marginBottom={1}>
          <Team />
        </Box>
        <Box marginBottom={1}>
          <Team />
        </Box>
      </Flex>
    </Box>
  );
};
