import React from 'react';
import styled from 'styled-components';

// Styled
import * as s from './NavHeader.styles';

// Blocks
import { Box, Flex, Text, LayoutWrapper } from '../../../Blocks';

export const NavHeader = () => {
  return (
    <s.Wrapper>
      <Flex alignItems='center' justifyContent='space-between'>
        <Box width='100%'>
          <LayoutWrapper mb={2}>
            <Flex alignItems='center'>
              <div>
                <Text fontFamily='Lato' color='#D1D2D3'>
                  bcit-cst-sept
                </Text>
              </div>
              <div>arrow</div>
            </Flex>
          </LayoutWrapper>
          <div>
            <Flex alignItems='center'>
              <div>circle</div>
              <div>
                <Text fontFamily='Lato' color='#D1D2D3'>
                  Kenichi Okiebisu
                </Text>
              </div>
            </Flex>
          </div>
        </Box>
        <div>
          <Box width={48} height={48} borderRadius={9999} bg='gray' />
        </div>
      </Flex>
    </s.Wrapper>
  );
};
