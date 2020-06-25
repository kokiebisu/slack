import * as React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClientContentLayout } from '../layout';
import { Options } from '../../../shared/components/options';

interface Props {}

export const DirectMessagePage: React.FC<Props> = () => {
  const { userId } = useParams();

  return (
    <>
      <ClientContentLayout
        section={`${userId}`}
        content={<div>content</div>}
        options={<Options />}
      />
    </>
  );
};
