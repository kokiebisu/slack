import React from 'react';
import styled from 'styled-components';

import { Box, Flex } from '../../styles/blocks';

import { Reaction } from './Reaction';

export const Reactions = () => {
  return (
    <Box>
      <Flex>
        <Reaction />
        <AddReactionWrapper></AddReactionWrapper>
      </Flex>
    </Box>
  );
};

const AddReactionWrapper = styled(Box)``;
