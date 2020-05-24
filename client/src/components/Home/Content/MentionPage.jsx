import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Box, Text, Flex } from '../../../styles/blocks';

import { AtSign, Close } from '../../../assets/svg/SidebarContent';

import { Activity } from './Activity';

export const MentionPage = ({ group }) => {
  useEffect(() => {
    document.title = `Mentions & reactions | ${group}`;
  }, []);

  return (
    <Wrapper>
      <TopWrapper>
        <TopContainer>
          <Text
            letterSpacing='-0.05em'
            color='#000000'
            fontFamily='SlackLato-Bold'
            fontSize={15}>
            Mentions & reactions
          </Text>
        </TopContainer>
      </TopWrapper>
      <BottomWrapper>
        <BottomContainer>
          <Notice p={3}>
            <Box>
              <Flex justifyContent='space-between'>
                <Flex alignItems='center'>
                  <Box mr={2}>
                    <AtSign width={17} height={17} color='#DE4E2B' />
                  </Box>
                  <Box mb={1}>
                    <Text
                      color='#1D1C1D'
                      fontSize={18}
                      fontFamily='SlackLato-Bold'
                      letterSpacing='-0.025em'>
                      See new activity in real time
                    </Text>
                  </Box>
                </Flex>
                <Box>
                  <Close width={13} height={13} color='#5B5B5B' />
                </Box>
              </Flex>
            </Box>
            <Box mt={3}>
              <Text
                fontFamily='SlackLato-Regular'
                fontSize={15}
                color='#1D1C1D'>
                When people react to your messages or mention you or your
                keywords, you’ll see it here.
              </Text>
            </Box>
          </Notice>
          <Activity />
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
  margin-bottom: 25px;
`;
