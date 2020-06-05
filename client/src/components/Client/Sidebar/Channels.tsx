import * as React from 'react';
import styled from 'styled-components';

import _ from 'lodash';

import * as b from '../../../styles/blocks';

// Icons
import { Lock } from '../../../assets/svg';
import { ChannelHashtag } from '../../../assets/svg/HashTag';

interface Props {
  data: ChannelProps[];
}

interface ChannelProps {
  id: string;
  name: string;
  isPublic: boolean;
}

export const Channels: React.FC<any> = ({ data }) => {
  const tempChannels = [
    {
      id: 1,
      channelName: 'channel1',
      isPrivate: false,
    },
    {
      id: 2,
      channelName: 'channel2',
      isPrivate: true,
    },
  ];

  return (
    <b.Box pl={2}>
      {data.map((channel: ChannelProps) => {
        return (
          <Channel
            id={channel.id}
            name={channel.name}
            isPublic={channel.isPublic}
          />
        );
      })}
    </b.Box>
  );
};

const Channel: React.FC<ChannelProps> = ({ id, name, isPublic }) => {
  return (
    <b.Box py={2}>
      <b.Flex alignItems='center'>
        <b.Box pr={2}>
          {isPublic ? (
            <ChannelHashtagWrapper>
              <ChannelHashtag width={12} height={12} color='pink__lighter' />
            </ChannelHashtagWrapper>
          ) : (
            <LockWrapper>
              <Lock width={12} height={12} color='pink__lighter' />
            </LockWrapper>
          )}
        </b.Box>
        <b.Box style={{ top: 3 }}>
          <b.Text
            fontFamily='SlackLato-Light'
            color='pink__lighter'
            fontSize={15}>
            {name}
          </b.Text>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};

const ChannelHashtagWrapper = styled(b.Box)`
  position: relative;
  top: 3px;
`;

const LockWrapper = styled(b.Box)`
  position: relative;
  top: 3px;
`;
