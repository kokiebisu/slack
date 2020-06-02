import * as React from 'react';
import styled from 'styled-components';

import * as b from '../../styles/blocks';

import Thumbsup from '../../assets/img/thumbsup.png';

import { SmilePlus } from '../../assets/svg/Reaction';

interface Props {}

export const Reaction: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Container alignItems='center'>
        <b.Box mr={1}>
          <img width={14} height={14} src={Thumbsup} alt='icon' />
        </b.Box>
        <b.Box>
          <b.Text fontSize={11} fontFamily='SlackLato-Regular'>
            1
          </b.Text>
        </b.Box>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  padding: 0px 8px;
  border-radius: 15px;
  margin-right: 5px;

  &:hover {
    padding: 0px 7px;
    border: 1px solid #949394;
    background-color: #ffffff;
  }
`;

const Container = styled(b.Flex)`
  height: auto;
`;

export const Reactions: React.FC<Props> = () => {
  return (
    <b.Box>
      <b.Flex>
        <Reaction />
        <AddReactionWrapper>
          <SmilePlus width={22} height={22} color='#5D5D5D' />
        </AddReactionWrapper>
      </b.Flex>
    </b.Box>
  );
};

const AddReactionWrapper = styled(b.Button)`
  background-color: #f6f6f6;
  display: inline-block;
  padding: 1px 7px;
  border-radius: 15px;
  margin-right: 5px;

  &:hover {
    padding: 0px 6px;
    border: 1px solid #949394;
    background-color: #ffffff;
  }
`;
