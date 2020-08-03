import * as React from 'react';
import styled from 'styled-components';

import * as b from 'global/blocks';

import { SmilePlus, Move, StartThread, Bookmark, More } from 'assets/svg';

interface Props {}

export const ToolBox: React.FC<Props> = () => {
  return (
    <Wrapper py={1} px={2}>
      <b.Flex alignItems='center'>
        <Tool>
          <IconWrapper className='smileplus'>
            <SmilePlus />
          </IconWrapper>
        </Tool>
        <Tool>
          <IconWrapper className='move'>
            <Move />
          </IconWrapper>
        </Tool>
        <Tool>
          <IconWrapper className='startthread'>
            <StartThread />
          </IconWrapper>
        </Tool>
        <Tool>
          <IconWrapper className='bookmark'>
            <Bookmark />
          </IconWrapper>
        </Tool>
        <Tool>
          <IconWrapper className='more'>
            <More />
          </IconWrapper>
        </Tool>
      </b.Flex>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  border: 1px solid ${({ theme }) => theme.colors.white__dark};
  border-radius: 10px;
`;

const Tool = styled(b.Button)`
  width: 35px;
  height: 30px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white__dark};
    border-radius: 5px;
  }
`;

const IconWrapper = styled(b.Box)`
  position: relative;

  &.smileplus {
    &.move {
      svg {
        width: 24px;
        height: 24px;
        path {
          fill: ${({ theme }) => theme.colors.gray__light};
        }
      }
    }
  }

  &.startthread {
    &.bookmark {
      &.more {
        svg {
          width: 18px;
          height: 18px;
          path {
            fill: ${({ theme }) => theme.colors.gray__light};
          }
        }
      }
    }
  }

  &.startthread {
    top: 1px;
  }

  &.bookmark {
    top: 1.5px;
  }

  &.more {
    top: 1.5px;
  }
`;
