import React from 'react';
import styled from 'styled-components';

import { Bookmark } from '../../../assets/svg';
import { Transition } from '../../../assets/svg';

import * as b from '../../../styles/blocks';

interface Props {
  group: string;
}

export const SavedPage: React.FC<Props> = ({ group }) => {
  return (
    <Wrapper>
      <TopWrapper>
        <TopContainer>
          <b.Box>
            <b.Text color='#1D1C1D' fontFamily='SlackLato-Black' fontSize={15}>
              Saved items
            </b.Text>
          </b.Box>
          <SideOption>
            <Transition width={17} height={17} color='#606060' />
          </SideOption>
        </TopContainer>
      </TopWrapper>
      <BottomWrapper>
        <BottomContainer>
          <b.Box>
            <Bookmark width={26} height={26} color='#E01E5A' />
          </b.Box>
          <b.Box pt={3} pb={2}>
            <b.Text fontSize={17} fontFamily='SlackLato-Bold' color='black'>
              Save messages and files to come back to later
            </b.Text>
          </b.Box>
          <b.Box>
            <b.Text
              fontSize={15}
              fontFamily='SlackLato-Regular'
              color='#7D7C7D'>
              Mark your to-dos or save something for another time. Only you can
              see your saved items, so use them however you’d like.
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

const TopContainer = styled(b.Flex)`
  justify-content: space-between;
  align-items: center;
  height: inherit;
  padding: 0 19px;
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

const SideOption = styled(b.Button)`
  padding: 8px 10px 6px 10px;
  background-color: transparent;
  &:hover {
    background-color: #f6f6f6;
    border-radius: 3px;
  }
`;
