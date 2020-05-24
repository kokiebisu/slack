import React, { useState } from 'react';
import styled from 'styled-components';

import { Box, Flex, Text } from '../../../styles/blocks';

import { BottomArrow } from '../../../assets/svg/Arrows';
import { Write } from '../../../assets/svg/Write';

export const Profile = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={hovered ? `hovered` : ``}>
      <Container>
        <Box>
          <Box>
            <Flex alignItems='center'>
              <Box mr={1}>
                <Text
                  fontFamily='OpenSans-Semibold'
                  fontSize={14}
                  color='white'>
                  bcit-cst-sept2018
                </Text>
              </Box>
              <Box mb={1}>
                <BottomArrow width={8} height={8} color='white' />
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex alignItems='center'>
              <StatusIcon />
              <Name
                className={hovered ? `hovered` : ``}
                fontSize={13}
                fontFamily='OpenSans-Light'>
                Kenichi Okiebisu
              </Name>
            </Flex>
          </Box>
        </Box>
        <Avatar>
          <Write width={16} height={16} color='#431E44' />
        </Avatar>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: grid;
  padding: 10px 0;
  background-color: #3f0f40;
  align-items: center;
  border-bottom: 1px solid #532754;
  z-index: 10;
  cursor: pointer;

  &.hovered {
    background-color: #350d36 !important;
  }
`;

const Container = styled(Box)`
  height: 100%;
  padding: 0 15px;
  display: grid;
  align-items: center;
  grid-template-columns: auto min-content;
`;

const StatusIcon = styled(Box)`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #2bac76;
  margin-right: 4px;
`;

const Avatar = styled(Box)`
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: white;
  width: 35px;
  height: 35px;
`;

const Name = styled(Text)`
  color: #d8cfd9;

  &.hovered {
    color: white !important;
  }
`;
