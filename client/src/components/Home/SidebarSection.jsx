import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Flex, Text, Button } from '../../styles/blocks';

import { Play, Plus } from '../../assets/svg/SidebarSections';

export const SidebarSection = ({ title, subtitle, children, onReveal }) => {
  const [clicked, setClicked] = useState(false);

  const arrow = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: 90,
    },
  };

  return (
    <Wrapper>
      <Box>
        <Flex alignItems='center' justifyContent='space-between'>
          <Flex>
            <PlayWrapper
              onClick={clicked ? 'initial' : 'animate'}
              variants={arrow}
              mr={2}
              style={{ bottom: 5 }}>
              <Play width={8} height={8} color='#CFC3CF' />
            </PlayWrapper>
            <TitleWrapper onClick={onReveal}>
              <Text fontFamily='Segoe' color='#CFC3CF' fontSize={15}>
                {title}
              </Text>
            </TitleWrapper>
          </Flex>
          <Box>
            <Plus width={14} height={14} color='#CFC3CF' />
          </Box>
        </Flex>
      </Box>
      {children}
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
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  padding: 10px 20px 10px 18px;
`;

const TitleWrapper = styled(Button)``;

const PlayWrapper = styled(Box)``;
