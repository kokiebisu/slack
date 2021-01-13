import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import * as b from "global/blocks";
import { Button } from "components/atoms/button";
import { Input } from "components/atoms/input";
import { Dialog } from "components/atoms/dialog";

export const Prototype: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box data-testid={`signin-prototype`} maxWidth={400}>
      <b.Box>
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
          <Button variant="confirm" label="Sign In with Email" block py={10} />
        </div>
        <b.Box mt={3}>
          <Dialog variant="email" />
        </b.Box>
      </b.Box>
    </b.Box>
  );
};
