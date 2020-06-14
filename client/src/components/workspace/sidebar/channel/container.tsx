import * as React from 'react';
import styled from 'styled-components';
import * as b from '../../../../styles/blocks';
import { Channel } from '.';

interface Props {
  data: any;
}

interface ChannelProps {
  id: string;
  name: string;
  isPublic: boolean;
}

export const Channels: React.FC<Props> = ({ data }) => {
  return (
    <b.Box>
      {data!.map((channel: ChannelProps) => {
        return (
          <Channel
            key={channel.id}
            id={channel.id}
            name={channel.name}
            isPublic={channel.isPublic}
          />
        );
      })}
    </b.Box>
  );
};