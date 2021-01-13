import React, { useContext } from "react";
import * as b from "global/blocks";

/** components */
import { Layout } from "components/layout";
import { Button } from "components/atoms/button";
import { ThemeContext } from "styled-components";

import { Prototype } from "components/prototype/signin";

export const SignInPage: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ position: "relative" }}>
      <Layout
        variant="get-started"
        title="Sign in to Slack"
        subtitle="Continue with the Google account or email address you use to sign in."
      >
        <b.Box py={4}>
          <Prototype />
        </b.Box>
      </Layout>
      <div style={{ position: "absolute", top: 30, right: 30 }}>
        <b.Box>
          <b.Flex justifyContent="flex-end">
            <b.Box>
              <b.Text>New to Slack?</b.Text>
            </b.Box>
          </b.Flex>
          <div>
            <Button
              noPadding
              to="/get-started#create"
              variant="transparent"
              content={
                <b.Text fontSize={15} color={theme.colors.blue}>
                  Create an account
                </b.Text>
              }
            ></Button>
          </div>
        </b.Box>
      </div>
    </div>
  );
};
