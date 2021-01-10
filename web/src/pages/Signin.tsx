import React from "react";
import * as b from "../global/blocks";

/** components */
import { Layout } from "components/layout/layout.component";

export const SignInPage: React.FC<{}> = () => {
  return (
    <Layout
      variant="getstarted"
      title="Sign in to Slack"
      subtitle="Continue with the Google account or email address you use to sign in."
    >
      <Prototype variant="signin" />
    </Layout>
  );
};
