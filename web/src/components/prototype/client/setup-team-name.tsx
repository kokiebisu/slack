import { Button } from "components/atoms/button";
import { Input } from "components/atoms/input/input.component";
import * as b from "global/blocks";
import React from "react";

export const SetupTeamNameClient: React.FC<{}> = () => {
  return (
    <b.Box px={5} pt={4} maxWidth={820}>
      <b.Box>
        <b.Text fontSize={12}>Step 1 of 3</b.Text>
      </b.Box>
      <b.Box maxWidth={650} my={3}>
        <b.Text fontSize={48} fontFamily="SlackLato-Bold">
          What's the name of your company or team?
        </b.Text>
      </b.Box>
      <b.Box mb={4}>
        <b.Text>
          This will be the name of your Slack workspace — choose something that
          your team will recognize.
        </b.Text>
      </b.Box>
      <b.Box>
        <Input variant="plain" />
      </b.Box>
      <b.Box mt={3} mb={5}>
        <b.Flex>
          <b.Box mr={2}></b.Box>
          <b.Box>
            <b.Text>
              Let anyone with an @fintros.com email join this workspace.
            </b.Text>
          </b.Box>
        </b.Flex>
      </b.Box>
      <b.Box>
        <Button variant="confirm" label="Next" px={5} py={2} />
      </b.Box>
    </b.Box>
  );
};
