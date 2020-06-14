import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClientContentLayout } from '../../layout';
import { Bottom, IconWrapper } from './layout.styles';
import * as b from '../../../../../styles/blocks';
import { Info } from '../../../../../assets/svg';
import { useGetChannelByIdQuery } from '../../../../../generated/graphql';

interface Props {}

export const ChannelPage: React.FC<Props> = () => {
  const { channelId } = useParams();
  const {
    data: { getChannelById } = {},
    loading,
    error,
  } = useGetChannelByIdQuery({ variables: { channelId } });
  useEffect(() => {
    if (getChannelById) {
      document.title = `Slack | ${getChannelById?.channel!.name}`;
    }
  }, [getChannelById]);

  return (
    <ClientContentLayout
      section='Mentions & reactions'
      content={<ContentLayout />}
      options={<Options />}
    />
  );
};

const ContentLayout = () => {
  return <h2>hello</h2>;
};

const Options = () => {
  return (
    <b.Box>
      <b.Flex alignItems='center'>
        <IconWrapper className='sideoption' mr={2}>
          <Info />
        </IconWrapper>
        <b.Box>
          <b.Text>Details</b.Text>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};
