import * as React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClientContentLayout } from '../../layout';
import { Options } from '../../../../shared/components/options';

// Query
import { useUserQuery } from '../../../../../generated/graphql';
import { Content } from '../content';

interface Props {}

export const DirectMessagePage: React.FC<Props> = () => {
  const { userId } = useParams();
  const { data: userData } = useUserQuery({ variables: { userId } });
  return (
    <>
      <ClientContentLayout
        section={`${userData?.user.user?.fullname}`}
        content={<Content />}
        options={<Options />}
      />
    </>
  );
};
