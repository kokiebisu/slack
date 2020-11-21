import * as React from 'react';

import styled from 'styled-components';
import * as b from 'global/blocks';

import { size } from 'global/sizes';
import { TogetherBulletProps } from './props';
import { Collaborate, ConnectCall, Share } from 'assets/svg/Icons';

export const TogetherBullet: React.FC<TogetherBulletProps> = ({
  together = 'share',
}) => {
  const togethers = {
    share: {
      icon: <Share width={48} />,
      title: 'Share files',
      subtitle: 'Keep files and the messages about them together in channels.',
    },
    connect: {
      icon: <ConnectCall width={48} />,
      title: 'Connect on a call',
      subtitle:
        'If working face to face is easier, go from channel to voice or video call in a click',
    },
    collaborate: {
      icon: <Collaborate width={48} />,
      title: 'Collaborate with partners',
      subtitle:
        'Work faster with external clients, vendors and more by working in a channel',
    },
  };
  return (
    <b.Box>
      <IconWrapper>{togethers[together].icon}</IconWrapper>
      <Title my={3}>
        <b.Text>{togethers[together].title}</b.Text>
      </Title>
      <SubTitle>
        <b.Text>{togethers[together].subtitle}</b.Text>
      </SubTitle>
    </b.Box>
  );
};

const IconWrapper = styled(b.Box)`
  svg {
    width: 48px;
    height: 48px;
    path {
      fill: ${({ theme }) => theme.colors.blue};
    }
  }
`;

const Title = styled(b.Box)`
  & p {
    font-family: 'CircularPro-Bold';
    color: ${({ theme }) => theme.colors.black__light};
    font-size: 18px;
  }
`;

const SubTitle = styled(b.Box)`
  & p {
    font-size: 18px;
    line-height: 1.6;
  }
`;
