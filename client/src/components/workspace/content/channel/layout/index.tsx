import * as React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClientContentLayout } from '../../layout';
import * as b from '../../../../../styles/blocks';
import { useGetChannelByIdQuery } from '../../../../../generated/graphql';
import { Options } from '../options';
import { SubSection } from '../subsection';

// Styles
import styled from 'styled-components';
import { Content } from '../content';

interface Props {}

export const ChannelPage: React.FC<Props> = () => {
  const { channelId } = useParams();
  const { data: { getChannelById } = {} } = useGetChannelByIdQuery({
    variables: { channelId },
  });

  useEffect(() => {
    if (getChannelById) {
      document.title = `Slack | ${getChannelById?.channel!.name}`;
    }
  }, [getChannelById]);

  return (
    <>
      {getChannelById && getChannelById.channel && (
        <ClientContentLayout
          section={`# ${getChannelById?.channel!.name}`}
          subsection={<SubSection channelId={channelId} />}
          content={<Content />}
          options={<Options />}
        />
      )}
    </>
  );
};
