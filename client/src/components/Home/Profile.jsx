import React from 'react';
import styled from 'styled-components';

import { Box, Flex, Text } from '../../styles/blocks';

import { BottomArrow } from '../../assets/svg/Arrows';
import { Write } from '../../assets/svg/Write';

export const Profile = () => {
  return (
    <ProfileWrapper>
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
              <Text fontSize={13} color='#D8CFD9' fontFamily='OpenSans-Light'>
                Kenichi Okiebisu
              </Text>
            </Flex>
          </Box>
        </Box>
        <Avatar>
          <Write width={16} height={16} color='#431E44' />
        </Avatar>
      </Container>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled(Box)`
  height: 100%;
  display: grid;
  margin: 0 15px;
  background-color: 'yellow';
  align-items: center;
`;

const Container = styled(Box)`
  height: 100%;
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
