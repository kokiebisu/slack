import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// Blocks
import { Box, Flex, Text, LayoutWrapper } from '../Blocks';

export const Channel = ({ title }) => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <Button state={selected} onClick={() => setSelected(!selected)}>
        <LayoutWrapper px={25} py={2}>
          <Flex>
            <LayoutWrapper mr={1}>
              <Title state={selected}>#</Title>
            </LayoutWrapper>
            <div>
              <Title state={selected}>{title}</Title>
            </div>
          </Flex>
        </LayoutWrapper>
      </Button>
    </>
  );
};

const Button = styled.button`
  background-color: ${({ state }) => (state ? '#1164a3' : 'transparent')};
  border: none;
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: 'Lato';
  font-weight: 300;
  color: ${({ state }) => (state ? 'white' : 'rgb(207, 195, 207)')};
`;
