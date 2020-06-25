import * as React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClientContentLayout } from '../layout';

interface Props {}

export const DirectMessagePage: React.FC<Props> = () => {
  const { channelId } = useParams();
  console.log('entered rsdaf');
  return (
    <>
      <ClientContentLayout
        section='usr'
        subsection={<div>he</div>}
        content={<div>content</div>}
        options={<div>options</div>}
      />
    </>
  );
};
