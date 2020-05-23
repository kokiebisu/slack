import React, { useState } from 'react';
import styled from 'styled-components';

import { Flex, Box, Text, Button } from '../../styles/blocks';

export const Option = ({ name, children }) => {
  const [hovered, setHovered] = useState(false);

  console.log('called');

  return (
    <Wrapper
      className={hovered ? `hovered` : ``}
      onMouseEnter={() => {
        setHovered(true);
        console.log('hovered', hovered);
      }}
      onMouseLeave={() => {
        setHovered(false);
        console.log('hovered', hovered);
      }}>
      <Flex>
        <Icon style={{ top: 2 }}>{children}</Icon>
        <TextWrapper>
          <Text fontFamily='Segoe' color='#CFC3CF' fontSize={15}>
            {name}
          </Text>
        </TextWrapper>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(Button)`
  padding: 5px 15px;
  width: 100%;
  cursor: pointer;

  &.hovered {
    background: #350d36;
  }
`;

const Icon = styled(Box)`
  margin-right: 8px;
`;

const TextWrapper = styled(Box)`
  position: relative;
  top: 2px;
`;
