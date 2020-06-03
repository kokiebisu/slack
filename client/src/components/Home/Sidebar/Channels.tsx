import * as React from 'react';
import styled from 'styled-components';

import _ from 'lodash';

// Graphql
import { gql } from 'apollo-boost';

import * as b from '../../../styles/blocks';

// Icons
import { Lock } from '../../../assets/svg';
import { ChannelHashtag } from '../../../assets/svg/HashTag';

interface Props {}

export const Channels: React.FC<Props> = () => {
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
      {tempChannels.map((channel) => {
        return (
          <Channel
            key={channel.id}
            channelName={channel.channelName}
            isPrivate={channel.isPrivate}
          />
        );
      })}
    </b.Box>
  );
};

interface ChannelProps {
  channelName: string;
  isPrivate: boolean;
}

const Channel: React.FC<ChannelProps> = ({ channelName, isPrivate }) => {
  return (
    <b.Box py={2}>
      <b.Flex alignItems='center'>
        <b.Box pr={2}>
          {isPrivate ? (
            <LockWrapper>
              <Lock width={12} height={12} color='#CFC3CF' />
            </LockWrapper>
          ) : (
            <ChannelHashtagWrapper>
              <ChannelHashtag width={12} height={12} color='#CFC3CF' />
            </ChannelHashtagWrapper>
          )}
        </b.Box>
        <b.Box style={{ top: 3 }}>
          <b.Text fontFamily='SlackLato-Light' color='#CFC3CF' fontSize={15}>
            {channelName}
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
