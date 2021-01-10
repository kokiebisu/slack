import React from "react";

/** components */
import { Layout } from "components/layout/layout.component";
import { Prototype } from "components/prototype/auth";

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
