import React from "react";
import * as b from "global/blocks";
import { Prototype } from "components/prototype/get-started";
import { Layout } from "components/layout";
import { useLocation } from "react-router-dom";

export const GetStartedPage: React.FC<{}> = () => {
  const location = useLocation();
  const hash = location.hash.replace("#", "");
  const email = "kenichi@fintros.com";
  const hashes: {
    [hash: string]: { variant: string; title: string; subtitle: string };
  } = {
    create: {
      variant: "get-started",
      title: "First, enter your email",
      subtitle: "We suggest using the email address you use at work.",
    },
    confirmdigit: {
      variant: "get-started",
      title: "Check your email for a code",
      subtitle: `We’ve sent a 6-digit code to ${email}. The code expires shortly, so please enter it soon.`,
    },
  };

  return (
    <Layout
      variant={hashes[hash].variant}
      title={hashes[hash].title}
      subtitle={hashes[hash].subtitle}
    >
      <b.Box py={2}>
        <Prototype variant={hash} />
      </b.Box>
    </Layout>
  );
};
