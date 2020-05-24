import React from 'react';
import styled from 'styled-components';

import Thumbsup from '../../../assets/img/thumbsup.png';

import { Reactions } from '../../shared/Reactions';

import { Box, Flex, Text } from '../../../styles/blocks';

export const Activity = () => {
  return (
    <ActivityWrapper p={3}>
      <Box>
        <Text fontSize={14} fontFamily='OpenSans-SemiBold'>
          Thomas Bui - Set E reacted to your message
        </Text>
      </Box>
      <Box mt={2}>
        <ActivityContent>
          <Box>
            <img width={30} height={30} src={Thumbsup} />
          </Box>
          <Box>
            <Box>
              <Flex alignItems='center'>
                <UserWrapper mr={2}>
                  <Text
                    color='#1D1C1D'
                    fontFamily='OpenSans-Bold'
                    letterSpacing='-0.025em'>
                    ken
                  </Text>
                </UserWrapper>
                <Box>
                  <Text color='#616061' fontFamily='Segoe' fontSize={13}>
                    Yesterday at 2:44 PM
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box mt={2}>
              <Text color='#616061' fontFamily='Segoe' fontSize={13}>
                Too
              </Text>
            </Box>
            <Box mt={1}>
              <Reactions />
            </Box>
          </Box>
        </ActivityContent>
      </Box>
    </ActivityWrapper>
  );
};

const ActivityWrapper = styled(Box)`
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 25px;
`;

const ActivityContent = styled(Box)`
  display: grid;
  grid-template-columns: 35px auto;
`;

const UserWrapper = styled(Box)`
  position: relative;
  bottom: 3px;
`;
