import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Text } from '../../styles/blocks';

import { Play, Plus } from '../../assets/svg/SidebarSections';

export const SidebarSection = ({ title, subtitle, children }) => {
  return (
    <Wrapper>
      <Box>
        <Flex alignItems='center' justifyContent='space-between'>
          <Flex>
            <Box mr={2} style={{ bottom: 5 }}>
              <Play width={8} height={8} color='#CFC3CF' />
            </Box>
            <Box>
              <Text fontFamily='Segoe' color='#CFC3CF' fontSize={15}>
                {title}
              </Text>
            </Box>
          </Flex>
          <Box>
            <Plus width={14} height={14} color='#CFC3CF' />
          </Box>
        </Flex>
      </Box>
      {subtitle ? (
        <Box py={3} pl={2}>
          <Flex alignItems='center'>
            <Box pr={2} style={{ bottom: 4 }}>
              <Plus width={8} height={8} color='white' />
            </Box>
            <Box>
              <Text fontFamily='Segoe' color='#CFC3CF' fontSize={15}>
                {subtitle}
              </Text>
            </Box>
          </Flex>
        </Box>
      ) : null}
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  padding: 10px 15px;
`;
