import React from 'react';
import styled from 'styled-components';

import Thumbsup from '../../assets/img/thumbsup.png';

// Blocks
import { Box, Flex, Text } from '../../styles/blocks';

export const Reaction = () => {
  return (
    <Wrapper>
      <Flex alignItems='center'>
        <EmojiWrapper mr={1}>
          <img width={14} height={14} src={Thumbsup} />
        </EmojiWrapper>
        <CountWrapper>
          <Text fontSize={11} fontFamily='OpenSans-Light'>
            1
          </Text>
        </CountWrapper>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  background-color: #f6f6f6;
  display: inline-block;
  padding: 2px 6px;
  border-radius: 15px;
`;

const EmojiWrapper = styled(Box)``;

const CountWrapper = styled(Box)``;
