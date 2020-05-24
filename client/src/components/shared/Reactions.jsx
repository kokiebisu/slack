import React from 'react';
import styled from 'styled-components';

import * as b from '../../styles/blocks';

import { Reaction } from './Reaction';

import { SmilePlus } from '../../assets/svg/Reaction';

export const Reactions = () => {
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
