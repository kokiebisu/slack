import React from 'react';
import styled from 'styled-components';

import { Flex, Box, Text } from '../../styles/blocks';

export const Option = ({ name, children }) => {
  return (
    <OptionWrapper>
      <Flex>
        <Icon>{children}</Icon>
        <Box>
          <Text fontFamily='OpenSans-Medium' color='#CFC3CF' fontSize={13}>
            {name}
          </Text>
        </Box>
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
