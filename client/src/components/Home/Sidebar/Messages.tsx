import * as React from 'react';
import styled from 'styled-components';

import { Heart } from '../../../assets/svg/SidebarSections';

import * as b from '../../../styles/blocks';

interface Props {}

export const Messages: React.FC<Props> = () => {
  return (
    <b.Box pl={2}>
      <b.Box py={2}>
        <b.Flex alignItems='center'>
          <HeartWrapper pr={2}>
            <Heart width={10} height={10} color='#2BAC76' />
          </HeartWrapper>
          <b.Box style={{ top: 3 }}>
            <b.Text fontFamily='SlackLato-Light' color='#CFC3CF' fontSize={15}>
              Slackbot
            </b.Text>
          </b.Box>
        </b.Flex>
      </b.Box>
      <Message />
    </b.Box>
  );
};

const HeartWrapper = styled(b.Box)`
  position: relative;
  top: 1.5px;
`;

const Message = () => {
  return (
    <b.Box py={2}>
      <b.Flex alignItems='center'>
        <StatusWrapper pr={2}>
          <Status />
        </StatusWrapper>
        <b.Box style={{ top: 3 }}>
          <b.Text fontFamily='SlackLato-Light' color='#CFC3CF' fontSize={15}>
            ken
          </b.Text>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};

const StatusWrapper = styled(b.Box)`
  position: relative;
  top: 2.5px;
`;

const Status = styled(b.Box)`
  width: 9px;
  height: 9px;
  background-color: #2bac76;
  border-radius: 100%;
`;