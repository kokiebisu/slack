import * as React from 'react';

// Blocks
import * as b from 'styles/blocks';

// Components
import { Channel } from 'components/Workspace/Sidebar/Channel';

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
