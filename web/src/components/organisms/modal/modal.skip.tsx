import { Button } from "components/atoms/button";
import * as b from "global/blocks";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

export const SkipModal: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box p={24}>
      <b.Box>
        <b.Flex alignItems="center" justifyContent="space-between">
          <b.Box>
            <b.Text fontFamily="SlackLato-Bold" fontSize={20}>
              Skip without inviting?
            </b.Text>
          </b.Box>
          <b.Box>close</b.Box>
        </b.Flex>
      </b.Box>
      <b.Box mt={3} mb={4}>
        <b.Text fontSize={15} lineHeight={1.3}>
          To really get a feel for Slack — and to see all the ways it can
          simplify and organize your team’s work — you’ll need a few teammates
          here.
        </b.Text>
      </b.Box>
      <b.Box>
        <b.Flex justifyContent="flex-end" alignItems="center">
          <b.Box mr={2}>
            <Button variant="modal" label="Cancel" transparent />
          </b.Box>
          <b.Box>
            <Button
              variant="modal"
              label="Skip Step"
              bg={theme.colors.pink__dark}
            />
          </b.Box>
        </b.Flex>
      </b.Box>
    </b.Box>
  );
};
