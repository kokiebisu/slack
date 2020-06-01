import React from 'react';
import styled from 'styled-components';

import { Clipboard } from '../../../assets/svg/DraftPage';

import * as b from '../../../styles/blocks';

export const DraftPage = () => {
  return (
    <Wrapper>
      <TopWrapper>
        <TopContainer>
          <b.Box>
            <b.Text color='black' fontFamily='SlackLato-Black' fontSize={15}>
              Drafts
            </b.Text>
          </b.Box>
          <b.Box style={{ margin: '4px 0' }}>
            <b.Text
              fontSize={13}
              fontFamily='SlackLato-Regular'
              color='#606060'>
              No drafts
            </b.Text>
          </b.Box>
        </TopContainer>
      </TopWrapper>
      <BottomWrapper>
        <BottomContainer>
          <b.Box>
            <Clipboard width={26} height={26} color='#4A144B' />
          </b.Box>
          <b.Box pt={3} pb={2}>
            <b.Text fontSize={17} fontFamily='SlackLato-Bold' color='black'>
              Draft messages to send when you’re ready
            </b.Text>
          </b.Box>
          <b.Box>
            <b.Text
              fontSize={15}
              fontFamily='SlackLato-Regular'
              color='#7D7C7D'>
              Start typing a message anywhere, then find it here. Re-read,
              revise, and send whenever you’d like.
            </b.Text>
          </b.Box>
          <NewMessageWrapper mt={3} py={2} px={2} borderRadius={5}>
            <b.Text
              fontSize={15}
              fontFamily='SlackLato-Regular'
              border='1px solid '
              color='#1D1C1D'>
              New Message
            </b.Text>
          </NewMessageWrapper>
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

const BottomWrapper = styled(b.Flex)`
  height: auto;
  justify-content: center;
  align-items: center;
`;

const BottomContainer = styled(b.Box)`
  max-width: 420px;
  text-align: center;
`;

const NewMessageWrapper = styled(b.Button)`
  display: inline-block;
  border: 1px solid #bbbabb;

  &:hover {
    background-color: #f6f6f6 !important;
  }
`;
