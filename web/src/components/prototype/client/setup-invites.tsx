import { Button } from "components/atoms/button";
import { Input } from "components/atoms/input";
import * as b from "global/blocks";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const SetupInvitesClient: React.FC<{ team?: string }> = ({
  team = "Team",
}) => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box px={5} pt={4} maxWidth={820}>
      <b.Box>
        <b.Text fontSize={12}>Step 3 of 3</b.Text>
      </b.Box>
      <b.Box maxWidth={650} my={3}>
        <b.Text fontSize={48} fontFamily="SlackLato-Bold">
          Who do you email most about <span>{team}</span>?
        </b.Text>
      </b.Box>
      <b.Box mb={4}>
        <b.Text>
          To give Slack a spin, add a few coworkers you talk with regularly.
        </b.Text>
      </b.Box>
      <b.Box>
        <Input variant="plain" />
      </b.Box>
      <b.Box mt={3}>
        <b.Flex>
          <b.Box mr={2}></b.Box>
          <b.Box>
            <b.Text>
              Let anyone with an @fintros.com email join this workspace.
            </b.Text>
          </b.Box>
        </b.Flex>
      </b.Box>
      <b.Box mt={5}>
        <b.Flex alignItems="center">
          <b.Box mr={3}>
            <Button variant="confirm" label="Add Teammates" px={4} py={10} />
          </b.Box>
          <b.Box>
            <Button
              variant="transparent"
              content={
                <b.Text fontSize={15} color={theme.colors.gray}>
                  Skip this step
                </b.Text>
              }
            />
          </b.Box>
        </b.Flex>
      </b.Box>
    </b.Box>
  );
};
