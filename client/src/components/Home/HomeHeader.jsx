import React, { useState } from 'react';
import styled from 'styled-components';

import { Clock } from '../../assets/svg/Clock';
import { Magnify } from '../../assets/svg/Magnify';
import { Present } from '../../assets/svg/Present';
import { Info } from '../../assets/svg/Info';

// Styles
import * as b from '../../styles/blocks';

// Sizes
import { home } from '../../styles/sizes';

export const HomeHeader = () => {
  const [hovered, setHovered] = useState({
    clock: false,
  });

  return (
    <b.Box height={37} background='#350D36'>
      <b.Flex alignItems='center' justifyContent='center'>
        <b.Box style={{ flex: 1 }} pr={4} pl={3}>
          <b.Flex style={{ justifyContent: 'flex-end' }}>
            <ClockWrapper>
              <Clock width={18} height={18} color='white' />
            </ClockWrapper>
          </b.Flex>
        </b.Box>
        <Input borderRadius={5}>
          <b.Box>
            <b.Flex alignItems='center' justifyContent='center'>
              <b.Box px={1}>
                <Magnify width={12} height={12} />
              </b.Box>
              <b.Box px={1} style={{ top: 1 }}>
                <b.Text fontFamily='SlackLato-Regular' fontSize={13}>
                  Search bcit-cst-sept-2018
                </b.Text>
              </b.Box>
            </b.Flex>
          </b.Box>
        </Input>
        <b.Box style={{ flex: 1 }} pr={3} pl={3}>
          <b.Flex style={{ justifyContent: 'flex-end' }}>
            <WhatsNewWrapper borderRadius={4}>
              <b.Flex alignItems='center' justifyContent='center'>
                <b.Box style={{ top: 1 }}>
                  <Present width={14} height={14} color='white' />
                </b.Box>
                <WhatsNewText pl={2} style={{ top: 0.5 }}>
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
                <Info width={18} height={18} color='white' />
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
  border: 1.3px solid #684a68;
  padding: 0 8px;
  width: 320px;
  background-color: #431e44;
  color: #d9d2d9;
  fill: #d9d2d9;

  @media ${home.lg} {
    width: 500px;
  }

  &:hover {
    border: 1.3px solid #9a859b;
    color: #fefdfe;
    fill: #fefdfe;
  }
`;

const WhatsNewWrapper = styled(b.Button)`
  background-color: #cd2553;
`;

const WhatsNewText = styled(b.Box)`
  display: none;

  @media ${home.md} {
    display: block;
  }
`;

const ClockWrapper = styled(b.Button)`
  border-radius: 5px;
  padding: 6px 6px 3px 7px;
  &:hover {
    background-color: #49244a;
  }
`;
