import React, { useEffect } from 'react';
import styled from 'styled-components';

import * as b from '../../../styles/blocks';

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
          <b.Box>
            <b.Text color='#1D1C1D' fontFamily='SlackLato-Black' fontSize={15}>
              Mentions & reactions
            </b.Text>
          </b.Box>
          <b.Box></b.Box>
        </TopContainer>
      </TopWrapper>
      <BottomWrapper>
        <BottomContainer>
          <Notice p={3}>
            <b.Box>
              <b.Flex justifyContent='space-between'>
                <b.Flex alignItems='center'>
                  <b.Box mr={2}>
                    <AtSign width={17} height={17} color='#DE4E2B' />
                  </b.Box>
                  <b.Box mb={1}>
                    <b.Text
                      color='#1D1C1D'
                      fontSize={18}
                      fontFamily='SlackLato-Bold'
                      letterSpacing='-0.025em'>
                      See new activity in real time
                    </b.Text>
                  </b.Box>
                </b.Flex>
                <b.Box>
                  <Close width={13} height={13} color='#5B5B5B' />
                </b.Box>
              </b.Flex>
            </b.Box>
            <b.Box mt={3}>
              <b.Text
                fontFamily='SlackLato-Regular'
                fontSize={15}
                color='#1D1C1D'>
                When people react to your messages or mention you or your
                keywords, you’ll see it here.
              </b.Text>
            </b.Box>
          </Notice>
          <Activity />
          <Activity />
        </BottomContainer>
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  display: grid;
  grid-template-rows: 65px auto;
`;

const TopWrapper = styled(b.Box)`
  border-bottom: 1px solid #e2e2e2;
  height: 100%;
`;

const TopContainer = styled(b.Flex)`
  height: inherit;
  padding: 0 19px;
  align-items: center;
`;

const BottomWrapper = styled(b.Box)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
`;

const BottomContainer = styled(b.Box)`
  width: 100%;
  margin: 20px 20px 0 20px;
`;

const Notice = styled(b.Box)`
  background-color: #efefef;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 25px;
`;
