import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Box, Text } from '../../../styles/blocks';

// Image
import Leaf from '../../../assets/img/leaf.png';

export const ThreadsPage = ({ group }) => {
  useEffect(() => {
    document.title = `Slack | Threads | ${group}`;
  }, []);

  return (
    <Wrapper>
      <TopWrapper>
        <TopContainer>
          <Box>
            <Text color='black' fontFamily='MacklinSans-Medium'>
              Threads
            </Text>
          </Box>
          <Box style={{ margin: '4px 0' }}>
            <Text fontSize={13} fontFamily='Segoe' color='#606060'>
              No new replies
            </Text>
          </Box>
        </TopContainer>
      </TopWrapper>
      <BottomWrapper>
        <BottomContainer>
          <Box>
            <img src={Leaf} />
          </Box>
          <Box pt={3} pb={2}>
            <Text fontSize={20} fontFamily='MacklinSans-Bold' color='black'>
              Tend to your threads
            </Text>
          </Box>
          <Box>
            <Text fontSize={15} fontFamily='Segoe' color='#1D1C1D'>
              Threads you’re involved in will be collected right here.
            </Text>
          </Box>
          <Box py={3}>
            <Text fontSize={15} fontFamily='Segoe' color='#1264A3'>
              Learn about threads
            </Text>
          </Box>
        </BottomContainer>
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  height: inherit;
  display: grid;
  grid-template-rows: 65px auto;
`;

const TopWrapper = styled(Box)`
  padding: 15px 0;
  border-bottom: 1px solid #e2e2e2;
`;

const TopContainer = styled(Box)`
  padding: 0 19px;
  height: auto;
`;

const BottomWrapper = styled(Box)`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomContainer = styled(Box)`
  text-align: center;
`;
