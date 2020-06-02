import * as React from 'react';
import styled from 'styled-components';

import _ from 'lodash';

// Graphql
import { gql } from 'apollo-boost';

import * as b from '../../../styles/blocks';

// Icons
import { Lock, ChannelHashtag } from '../../../assets/svg/SidebarSections';

interface Props {}

export const Channels: React.FC<Props> = ({ channels }) => {
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

const Channel = ({ channelName, isPrivate }) => {
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
