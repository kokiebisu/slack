import * as React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "components/layout/layout.component";
import { Options } from "components/shared/Options";

// Query
import { useUserQuery } from "generated/graphql";
import { Content } from "components/Workspace/DirectMessage/Content";

interface Props {}

export const DirectMessagePage: React.FC<Props> = () => {
  const { userId } = useParams();
  const { data: userData } = useUserQuery({ variables: { userId } });
  return (
    <>
      <Layout
        variant="workspace"
        section={`${userData?.user.user?.fullname}`}
        content={<Content />}
        options={<Options />}
      />
    </>
  );
};
