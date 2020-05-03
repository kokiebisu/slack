import React from 'react';

import styled from 'styled-components';

import { Box, Text, Flex } from '../../styles/blocks';

const renderHeader = (type) => {
  switch (type) {
    case 'App':
      return (
        <>
          <Flex justifyContent='space between'>
            <Box></Box>
            <Box>
              <Flex alignItems='center'>
                <Logo mr={2}>
                  <svg
                    fill='#6A696A'
                    height={16}
                    width={16}
                    viewBox='0 0 24 24'>
                    <path d='M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z' />
                  </svg>
                </Logo>
                <Box>
                  <Text fontFamily='Lato' color='#6A696A'>
                    App Directory
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </>
      );
  }
};

export const Content = ({ type }) => {
  return (
    <Wrapper>
      <Flex justifyContent='space-between' alignItems='center'>
        <Box>
          <Text fontFamily='Lato' fontSize={18} fontWeight='bold'>
            {type}
          </Text>
        </Box>
        <Box>{renderHeader(type)}</Box>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 2rem;
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid #e6e5e6;
`;

const Logo = styled(Box)`
  position: relative;
  top: 5px;
`;
