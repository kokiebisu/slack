import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../styles/blocks';

// Svgs
import { Clock, Magnify, Present, Info } from '../../assets/svg';

// Sizes
import { home } from '../../styles/sizes';

// Query
import { useTeamQuery } from '../../generated/graphql';

interface Props {
  team?: string;
}

export const HomeHeader: React.FC<Props> = ({ team }) => {
  return (
    <b.Box
      height={37}
      backgroundColor='primary__dark'
      borderBottom={1}
      borderBottomStyle='solid'
      borderBottomColor='primary__lighter'>
      <b.Flex alignItems='center' justifyContent='center'>
        <b.Box style={{ flex: 1 }} pr={4} pl={3}>
          <b.Flex style={{ justifyContent: 'flex-end' }}>
            <IconWrapper className='clock'>
              <Clock />
            </IconWrapper>
          </b.Flex>
        </b.Box>
        <Input borderRadius={5}>
          <b.Box>
            <b.Flex alignItems='center' justifyContent='center'>
              <IconWrapper px={1} className='magnify'>
                <Magnify />
              </IconWrapper>
              <b.Box px={1} style={{ top: 1 }}>
                <b.Text fontFamily='SlackLato-Regular' fontSize={13}>
                  Search {team}
                </b.Text>
              </b.Box>
            </b.Flex>
          </b.Box>
        </Input>
        <b.Box style={{ flex: 1 }} pr={3} pl={3}>
          <b.Flex style={{ justifyContent: 'flex-end' }}>
            <WhatsNewWrapper borderRadius={4}>
              <b.Flex alignItems='center' justifyContent='center'>
                <IconWrapper>
                  <Present />
                </IconWrapper>
                <WhatsNewText pl={2}>
                  <b.Text
                    fontFamily='SlackLato-Regular'
                    fontSize={13}
                    color='white'>
                    See what's new
                  </b.Text>
                </WhatsNewText>
              </b.Flex>
            </WhatsNewWrapper>
            <b.Button ml={2} background='transparent'>
              <b.Flex alignItems='center'>
                <IconWrapper className='info'>
                  <Info />
                </IconWrapper>
              </b.Flex>
            </b.Button>
          </b.Flex>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};

const Input = styled(b.Button)`
  height: 24px;
  border: 1.3px solid ${({ theme }) => theme.colors.purple};
  padding: 0 8px;
  width: 320px;
  background-color: ${({ theme }) => theme.colors.primary__lighter};
  color: ${({ theme }) => theme.colors.white__dark};
  fill: ${({ theme }) => theme.colors.white__dark};

  @media ${home.lg} {
    width: 500px;
  }

  &:hover {
    border: 1.3px solid ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white__dark};
    fill: ${({ theme }) => theme.colors.white__dark};
  }
`;

const WhatsNewWrapper = styled(b.Button)`
  background-color: ${({ theme }) => theme.colors.red};
`;

const WhatsNewText = styled(b.Box)`
  display: none;

  @media ${home.md} {
    display: block;
  }
`;

const IconWrapper = styled(b.Box)`
  position: relative;

  &.info {
    svg {
      width: 18px;
      height: 18px;
    }
  }

  &.clock {
    border-radius: 5px;
    padding: 6px 6px 3px 7px;
    svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary__lighter};
    }
  }
  &.magnify {
    svg {
      width: 12px;
      height: 12px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }

  &.present {
    top: 1px;
    svg {
      width: 14px;
      height: 14px;
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
