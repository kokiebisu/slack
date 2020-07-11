import * as React from 'react';
import { useParams } from 'react-router-dom';
import { ClientContentLayout } from '../../Layout';
import { Options } from '../../../../shared/components/Options';

// Query
import { useUserQuery } from '../../../../../generated/graphql';
import { Content } from '../Content';

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
