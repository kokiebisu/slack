import React from "react";
import * as b from "../../../global/blocks";
import { Auth } from "src/components/organisms/auth/auth.component";

export const GetStartedPrototype = () => {
  return (
    <b.Box my={5}>
      <b.Flex justifyContent="center">
        <Auth variant="getstarted" />
      </b.Flex>
    </b.Box>
  );
};
