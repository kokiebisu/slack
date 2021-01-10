import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
/** styles */
import * as b from "global/blocks";
import { Button } from "components/atoms/button";

// Breakpoints;
import { signin } from "global/sizes";
import { Input } from "components/atoms/input/input.component";
import { Dialog } from "components/atoms/dialog/dialog.component";

export const SignInAuth: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ position: "relative" }}>
      <div>
        <div>
          <Button variant="auth" block />
        </div>
        <b.Box my={4}>
          <b.Flex alignItems="center">
            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: theme.colors.gray__lighter,
              }}
            />
            <b.Box px={3}>
              <b.Text
                fontFamily="SlackLato-Bold"
                fontSize={14}
                color={theme.colors.gray__light}
              >
                OR
              </b.Text>
            </b.Box>
            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: theme.colors.gray__lighter,
              }}
            />
          </b.Flex>
        </b.Box>
        <b.Box mb={3}>
          <Input variant="plain" type="email" />
        </b.Box>
        <div>
          <Button variant="confirm" label="Sign In with Email" block />
        </div>
        <b.Box mt={3}>
          <Dialog variant="email" />
        </b.Box>
      </div>
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        <div>
          <b.Text>New to Slack?</b.Text>
        </div>
        <div>
          <Button variant="transparent">Create an account</Button>
        </div>
      </div>
    </div>
  );
};
