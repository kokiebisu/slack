import React from "react";

import { ClientPage } from "./Client";
import { FindTeamPage } from "./FindTeam";
import { GetStartedPage } from "./GetStarted";
import { LandingPage } from "./Landing";
import { SignInPage } from "./Signin";

export interface PageProps {
  variant: string;
  [property: string]: any;
}

export const Page: React.FC<PageProps> = ({ variant, ...props }) => {
  const variants: {
    [variant: string]: JSX.Element;
  } = {
    landing: <LandingPage {...props} />,
    "get-started": <GetStartedPage {...props} />,
    signin: <SignInPage {...props} />,
    findteam: <FindTeamPage {...props} />,
    client: <ClientPage {...props} />,
  };
  return variants[variant];
};
