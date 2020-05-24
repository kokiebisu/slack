import React, { useState } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import { Flex, Box, Text, Button } from '../../../styles/blocks';

export const Option = ({ name, children, select, location }) => {
  const [hovered, setHovered] = useState(false);
  const history = useHistory();

  return (
    <Wrapper
      className={hovered ? `hovered` : ``}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => history.push(`/client/${name}`)}>
      <Flex>
        <Icon style={{ top: 1 }}>{children}</Icon>
        <TextWrapper>
          <Text
            style={{ textTransform: 'capitalize' }}
            fontFamily='Segoe'
            color='#CFC3CF'
            fontSize={15}>
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

  &.clicked {
    background: red;
  }
`;

const Icon = styled(Box)`
  margin-right: 8px;
`;

const TextWrapper = styled(Box)`
  position: relative;
  top: 2px;
`;
