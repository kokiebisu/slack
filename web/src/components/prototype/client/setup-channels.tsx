import { Button } from "components/atoms/button";
import { Input } from "components/atoms/input";
import * as b from "global/blocks";
import React from "react";

export const SetupChannelsClient: React.FC<{}> = () => {
  return (
    <b.Box px={5} pt={4} maxWidth={820}>
      <b.Box>
        <b.Text fontSize={12}>Step 2 of 3</b.Text>
      </b.Box>
      <b.Box maxWidth={650} my={3}>
        <b.Text fontSize={48} fontFamily="SlackLato-Bold">
          What's your team working on right now?
        </b.Text>
      </b.Box>
      <b.Box mb={4}>
        <b.Text>
          This could be anything: a project, campaign, event, or the deal you’re
          trying to close.
        </b.Text>
      </b.Box>
      <b.Box mt={3}>
        <Input variant="plain" />
      </b.Box>
      <b.Box mt={5}>
        <Button variant="confirm" label="Next" px={5} py={2} />
      </b.Box>
    </b.Box>
  );
};
