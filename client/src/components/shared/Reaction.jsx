import React from 'react';
import styled from 'styled-components';

import Thumbsup from '../../assets/img/thumbsup.png';

// Blocks
import * as b from '../../styles/blocks';

export const Reaction = () => {
  return (
    <Wrapper>
      <Container alignItems='center'>
        <EmojiWrapper mr={1}>
          <img width={14} height={14} src={Thumbsup} alt='icon' />
        </EmojiWrapper>
        <CountWrapper>
          <b.Text fontSize={11} fontFamily='SlackLato-Regular'>
            1
          </b.Text>
        </CountWrapper>
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

const EmojiWrapper = styled(b.Box)``;

const CountWrapper = styled(b.Box)``;
