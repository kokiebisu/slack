import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import * as b from "../../../global/blocks";

import { Button } from "../../atoms/button";

// Image
import { Input } from "components/atoms/input";

export const CreateGetStarted: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <b.Box mb={3}>
        <Input variant="plain" type="email" />
      </b.Box>
      <div>
        <Button variant="confirm" label="Continue" block py={10} />
      </div>
      <b.Box my={3}>
        <b.Flex>
          <b.Box mr={2}></b.Box>
          <b.Box>
            <b.Text>It's okay to send me emails about Slack.</b.Text>
          </b.Box>
        </b.Flex>
      </b.Box>
      <b.Box>
        <b.Text fontSize={14} color={theme.colors.gray__light}>
          By continuing, you're agreeing to our Customer Terms of Service,
          Privacy Policy, and Cookie Policy.
        </b.Text>
      </b.Box>
    </div>
  );
};
