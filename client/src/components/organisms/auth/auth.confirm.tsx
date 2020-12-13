import React from "react";

import { Redirect, useParams } from "react-router-dom";
import * as b from "global/blocks";
import { useVerifyUserByTokenQuery } from "generated/graphql";
import { Button } from "components/atoms/button/button.component";

export const ConfirmAuth: React.FC<{}> = () => {
  const { token } = useParams();
  const { data, loading } = useVerifyUserByTokenQuery({
    variables: { token },
  });
  //   token && !loading && data!.verifyUserByToken.ok
  const criteria = false;
  return (
    <div>
      {criteria ? (
        <Redirect to={`/your-workspaces/${token}`} />
      ) : (
        <b.Flex>
          <b.Box mr={3}>
            <Button variant="email" platform="gmail" />
          </b.Box>
          <b.Box>
            <Button variant="email" platform="outlook" />
          </b.Box>
        </b.Flex>
      )}
    </div>
  );
};
