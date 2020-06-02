import * as React from 'react';
import styled from 'styled-components';

import * as b from '../../../styles/blocks';

import { SmilePlus } from '../../../assets/svg/Reaction';
import { Move, StartThread, Bookmark, More } from '../../../assets/svg/Tools';

interface Props {}

export const ToolBox: React.FC<Props> = () => {
  return (
    <Wrapper py={1} px={2}>
      <b.Flex alignItems='center'>
        <Tool>
          <SmilePlus width={24} height={24} color='#606060' />
        </Tool>
        <Tool>
          <Move width={24} height={24} color='#606060' />
        </Tool>
        <Tool>
          <b.Box style={{ position: 'relative', top: 1 }}>
            <StartThread width={18} height={18} color='#606060' />
          </b.Box>
        </Tool>
        <Tool>
          <b.Box style={{ top: 1.5 }}>
            <Bookmark width={18} height={18} color='#606060' />
          </b.Box>
        </Tool>
        <Tool>
          <b.Box style={{ top: 1.5 }}>
            <More width={18} height={18} color='#606060' />
          </b.Box>
        </Tool>
      </b.Flex>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  border: 1px solid #dcdcdc;
  border-radius: 10px;
`;

const Tool = styled(b.Button)`
  width: 35px;
  height: 30px;
  &:hover {
    background-color: #f6f6f6;
    border-radius: 5px;
  }
`;
