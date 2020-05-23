import React from 'react';
import styled from 'styled-components';

import { Clock } from '../../assets/svg/Clock';
import { Magnify } from '../../assets/svg/Magnify';
import { Present } from '../../assets/svg/Present';
import { Info } from '../../assets/svg/Info';

// Styles
import { Box, Flex, Text, Button } from '../../styles/blocks';

// Sizes
import { home } from '../../styles/sizes';

export const HomeHeader = () => {
  return (
    <Box height={37} background='#350D36'>
      <Flex alignItems='center' justifyContent='center'>
        <Box style={{ flex: 1 }} pr={4} pl={3}>
          <Flex style={{ justifyContent: 'flex-end' }}>
            <Clock width={18} height={18} color='white' />
          </Flex>
        </Box>
        <Input borderRadius={5} background='#431E44'>
          <Box>
            <Flex alignItems='center' justifyContent='center'>
              <Box px={1}>
                <Magnify width={12} height={12} color='#D9D2D9' />
              </Box>
              <Box px={1} style={{ top: 3 }}>
                <Text fontFamily='Segoe' fontSize={12} color='#D9D2D9'>
                  Search bcit-cst-sept-2018
                </Text>
              </Box>
            </Flex>
          </Box>
        </Input>
        <Box style={{ flex: 1 }} pr={3} pl={3}>
          <Flex style={{ justifyContent: 'flex-end' }}>
            <Button background='#CD2553' borderRadius={4}>
              <Flex alignItems='center' justifyContent='center'>
                <Box pr={2} style={{ top: 1 }}>
                  <Present width={14} height={14} color='white' />
                </Box>
                <Box style={{ top: 2 }}>
                  <Text fontFamily='Segoe' fontSize={13} color='white'>
                    See what's new
                  </Text>
                </Box>
              </Flex>
            </Button>
            <Button ml={2} background='transparent'>
              <Flex alignItems='center'>
                <Info width={18} height={18} color='white' />
              </Flex>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

const Input = styled(Button)`
  height: 24px;
  border: 1.3px solid #684a68;
  padding: 0 8px;
  width: 320px;

  @media ${home.lg} {
    width: 500px;
  }
`;
