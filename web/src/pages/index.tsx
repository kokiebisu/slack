import React from "react";
import { ConfirmDigitPage } from "./ConfirmDigit";
import { CreateTeamPage } from "./CreateTeam";
import { FindTeamPage } from "./FindTeam";
import { GetStartedPage } from "./GetStarted";
import { LandingPage } from "./Landing";
import { SignInPage } from "./Signin";
import { WorkspacePage } from "./Workspace";

export interface PageProps {
  variant: string;
  [property: string]: any;
}

export const Page: React.FC<PageProps> = ({ variant, ...props }) => {
  const variants: {
    [variant: string]: JSX.Element;
  } = {
    landing: <LandingPage {...props} />,
    getstarted: <GetStartedPage {...props} />,
    signin: <SignInPage {...props} />,
    findteam: <FindTeamPage {...props} />,
    createteam: <CreateTeamPage {...props} />,
    confirmdigit: <ConfirmDigitPage {...props} />,
    workspace: <WorkspacePage {...props} />,
  };
  return variants[variant];
};
