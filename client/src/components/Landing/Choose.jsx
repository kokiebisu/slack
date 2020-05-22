import React from 'react';
import styled, { css } from 'styled-components';
import * as b from '../../styles/blocks';

// Components
import { Title } from './Landing.styles';

// Sizes
import { landing } from '../../styles/sizes';

export const Choose = () => {
  return (
    <Wrapper>
      <b.Container>
        <b.Box mb={4}>
          <b.Text
            fontFamily='CircularStd-Medium'
            fontSize={48}
            center
            color='white'>
            Choose a better way to work
          </b.Text>
        </b.Box>
        <b.Flex>hello</b.Flex>
      </b.Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 110px 0;
  background-color: #612069;
`;
