import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// Blocks
import { Box, Flex, Text, LayoutWrapper } from '../../Blocks';

// Styles
import * as s from './Channel.styles';

export const Channel = ({ title }) => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <s.Button state={selected} onClick={() => setSelected(!selected)}>
        <LayoutWrapper px={25} py={2}>
          <Flex>
            <LayoutWrapper mr={1}>
              <s.Text state={selected}>#</s.Text>
            </LayoutWrapper>
            <div>
              <s.Text state={selected}>{title}</s.Text>
            </div>
          </Flex>
        </LayoutWrapper>
      </s.Button>
    </>
  );
};
