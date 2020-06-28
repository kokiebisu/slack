import * as React from 'react';
import { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

// Query
import { useGetChannelByIdQuery } from '../../../../../generated/graphql';

// Components
import { ClientContentLayout } from '../../layout';
import { Options } from '../../../../shared/components/options';
import { SubSection } from '../subsection';

// Styles
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
