import React from 'react';
import styled from 'styled-components';

import { Flex, Box, Text } from '../../styles/blocks';

export const Option = ({ name, children }) => {
  return (
    <OptionWrapper>
      <Flex>
        <Icon style={{ top: 2 }}>{children}</Icon>
        <TextWrapper>
          <Text fontFamily='Segoe' color='#CFC3CF' fontSize={15}>
            {name}
          </Text>
        </TextWrapper>
      </Flex>
    </OptionWrapper>
  );
};

const OptionWrapper = styled(Box)`
  padding: 5px 0;
  cursor: pointer;
`;

const Icon = styled(Box)`
  margin-right: 8px;
`;

const TextWrapper = styled(Box)`
  position: relative;
  top: 2px;
`;
