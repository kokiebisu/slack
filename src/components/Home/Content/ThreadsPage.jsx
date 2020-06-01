import React from 'react';
import styled from 'styled-components';

import * as b from '../../../styles/blocks';

// Image
import Leaf from '../../../assets/img/leaf.png';
import { useTabTitle } from '../../../hooks/useTabTitle';

export const ThreadsPage = ({ group }) => {
  useTabTitle('Threads', group);

  return (
    <Wrapper>
      <TopWrapper>
        <TopContainer>
          <b.Box>
            <b.Text color='black' fontFamily='SlackLato-Black' fontSize={15}>
              Threads
            </b.Text>
          </b.Box>
          <b.Box style={{ margin: '4px 0' }}>
            <b.Text
              fontSize={13}
              fontFamily='SlackLato-Regular'
              color='#606060'>
              No new replies
            </b.Text>
          </b.Box>
        </TopContainer>
      </TopWrapper>
      <BottomWrapper>
        <BottomContainer>
          <b.Box>
            <img src={Leaf} alt='leaf' />
          </b.Box>
          <b.Box pt={3} pb={2}>
            <b.Text fontSize={17} fontFamily='SlackLato-Bold' color='black'>
              Tend to your threads
            </b.Text>
          </b.Box>
          <b.Box>
            <b.Text
              fontSize={15}
              fontFamily='SlackLato-Regular'
              color='#7D7C7D'>
              Threads you’re involved in will be collected right here.
            </b.Text>
          </b.Box>
          <b.Box py={3}>
            <b.Text
              fontSize={15}
              fontFamily='SlackLato-Regular'
              color='#2F76AE'>
              Learn about threads
            </b.Text>
          </b.Box>
        </BottomContainer>
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  height: inherit;
  display: grid;
  grid-template-rows: 65px auto;
`;

const TopWrapper = styled(b.Box)`
  padding: 15px 0;
  border-bottom: 1px solid #e2e2e2;
`;

const TopContainer = styled(b.Box)`
  padding: 0 19px;
  height: auto;
`;

const BottomWrapper = styled(b.Box)`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomContainer = styled(b.Box)`
  text-align: center;
`;
