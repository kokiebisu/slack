import * as React from 'react';
import styled from 'styled-components';

import _ from 'lodash';

import * as b from '../../../styles/blocks';

// Svgs
import { Lock } from '../../../assets/svg';
import { ThinHashTag } from '../../../assets/svg/HashTag';

interface Props {
  data: ChannelProps[] | undefined | null;
}

interface ChannelProps {
  id: string;
  name: string;
  isPublic: boolean;
}

export const Channels: React.FC<Props> = ({ data }) => {
  return (
    <b.Box pl={2}>
      {data!.map((channel: ChannelProps) => {
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
          <b.Box>
            <IconWrapper>{isPublic ? <ThinHashTag /> : <Lock />}</IconWrapper>
          </b.Box>
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

const IconWrapper = styled(b.Box)`
  position: relative;
  top: 3px;

  svg {
    width: 12px;
    height: 12px;
    path {
      fill: ${({ theme }) => theme.colors.pink__lighter};
    }
  }
`;
