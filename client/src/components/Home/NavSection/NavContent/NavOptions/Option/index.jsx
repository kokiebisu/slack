import React, { useState } from 'react';

import { Box, Flex, Text } from '../../../../../Blocks';

import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Option = ({ children, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledBox
      hovered={isHovered}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}>
      <Flex alignItems='center'>
        <Box>{children}</Box>
        <Box ml={3}>
          <Text fontFamily='Lato' color='#CFC3CF' fontSize={16}>
            {name}
          </Text>
        </Box>
      </Flex>
    </StyledBox>
  );
};

const StyledBox = styled(motion.div)`
  padding: 6px 25px;
  background-color: ${({ hovered }) => (hovered ? '#340D37' : 'transparent')};
  cursor: ${({ hovered }) => (hovered ? 'pointer' : null)};
`;
