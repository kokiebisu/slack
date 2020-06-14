import * as React from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../../../styles/blocks';

// Imgs
import Thumbsup from '../../../../assets/img/thumbsup.png';

import { Wrapper, Container } from './reaction.styles';

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