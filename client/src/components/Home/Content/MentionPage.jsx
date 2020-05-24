import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Box, Text, Flex } from '../../../styles/blocks';

export const MentionPage = ({ group }) => {
  useEffect(() => {
    document.title = `Mentions & reactions | ${group}`;
  }, []);

  return (
    <Wrapper>
      <TopWrapper>
        <TopContainer>
          <Text color='black' fontFamily='MacklinSans-Bold' fontSize={16}>
            Mentions & reactions
          </Text>
        </TopContainer>
      </TopWrapper>
      <BottomWrapper>
        <BottomContainer>
          <Notice p={3}>
            <Box>
              <Flex>
                <Box>at</Box>
                <Box>
                  <Text>See new activity in real time</Text>
                </Box>
                <Box>cross</Box>
              </Flex>
            </Box>
            <Box mt={3}>
              <Text>
                When people react to your messages or mention you or your
                keywords, you’ll see it here.
              </Text>
            </Box>
          </Notice>
        </BottomContainer>
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: grid;
  grid-template-rows: 65px auto;
`;

const TopWrapper = styled(Box)`
  border-bottom: 1px solid #e2e2e2;
  height: 100%;
`;

const TopContainer = styled(Flex)`
  height: inherit;
  padding: 0 19px;
  align-items: center;
`;

const BottomWrapper = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
`;

const BottomContainer = styled(Box)`
  width: 100%;
  margin: 20px 20px 0 20px;
`;

const Notice = styled(Box)`
  background-color: #efefef;
  padding: 25px;
  border-radius: 10px;
`;
