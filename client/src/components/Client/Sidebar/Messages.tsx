import * as React from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../../styles/blocks';

// Svgs
import { Heart } from '../../../assets/svg/Heart';

interface Props {}

export const Messages: React.FC<Props> = () => {
  return (
    <b.Box pl={2}>
      <b.Box py={2}>
        <b.Flex alignItems='center'>
          <IconWrapper pr={2}>
            <Heart />
          </IconWrapper>
          <b.Box style={{ top: 3 }}>
            <b.Text
              fontFamily='SlackLato-Light'
              color='pink__lighter'
              fontSize={15}>
              Slackbot
            </b.Text>
          </b.Box>
        </b.Flex>
      </b.Box>
      <Message />
    </b.Box>
  );
};

const IconWrapper = styled(b.Box)`
  position: relative;
  top: 1.5px;

  svg {
    width: 10px;
    height: 10px;
    path {
      fill: ${({ theme }) => theme.colors.green__lighter};
    }
  }
`;

const Message = () => {
  return (
    <b.Box py={2}>
      <b.Flex alignItems='center'>
        <StatusWrapper pr={2}>
          <Status />
        </StatusWrapper>
        <b.Box style={{ top: 3 }}>
          <b.Text
            fontFamily='SlackLato-Light'
            color='pink__lighter'
            fontSize={15}>
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
  background-color: ${({ theme }) => theme.colors.green__lighter};
  border-radius: 100%;
`;
