import * as React from "react";

import * as b from "../../../global/blocks";

import { useHistory } from "react-router-dom";

/** variants */
import { PrimaryButton } from "./button.primary";
import { NavButton } from "./button.nav";
import { TransparentButton } from "./button.transparent";
import { HamburgerButton } from "./button.hamburger";
import { SocialMediaButton } from "./button.socialmedia";
import { ConfirmButton } from "./button.confirm";
import { LinkButton } from "./button.link";
import { EmailButton } from "./button.email";
import { LaunchButton } from "./button.launch";
import { ReactionButton } from "./button.reaction";
import { WorkspaceButton } from "./button.workspace";
import { GetStartedButton } from "./button.getstarted";
import { NextButton } from "./button.next";
import { SquareButton } from "./button.square";
import { AuthButton } from "./button.auth";

export interface ButtonProps {
  to?: string;
  variant?: string;
  block?: boolean;
  [x: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  to,
  variant = "primary",
  block = false,
  onClick = () => alert("button clicked"),
  ...props
}) => {
  const history = useHistory();

  const variants: { [variant: string]: JSX.Element } = {
    primary: <PrimaryButton {...props} />,
    nav: <NavButton {...props} />,
    transparent: <TransparentButton {...props} />,
    hamburger: <HamburgerButton {...props} />,
    socialmedia: <SocialMediaButton {...props} />,
    link: <LinkButton {...props} />,
    confirm: <ConfirmButton {...props} />,
    email: <EmailButton {...props} />,
    launch: <LaunchButton {...props} />,
    reaction: <ReactionButton {...props} />,
    workspace: <WorkspaceButton {...props} />,
    getstarted: <GetStartedButton {...props} />,
    next: <NextButton {...props} />,
    square: <SquareButton {...props} />,
    auth: <AuthButton {...props} />,
  };

  return (
    <b.Button
      whileTap={{ scale: 0.99 }}
      whileHover={{ scale: 1.01 }}
      data-testid={`${variant}-button`}
      backgroundColor="transparent"
      display={block ? "block" : "inline-block"}
      width={block ? 1 : "auto"}
      onClick={to ? () => history.push(to) : onClick}
    >
      {variants[variant]}
    </b.Button>
  );
};
