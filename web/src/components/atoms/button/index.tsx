import * as React from "react";

import * as b from "../../../global/blocks";
import { css } from "styled-components";
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
import { ModalButton } from "./button.modal";
import { CloseButton } from "./button.close";
import { SearchButton } from "./button.search";
import { AvatarButton } from "./button.avatar";
import { AddButton } from "./button.add";
import { TextEditorButton } from "./button.texteditor";
import { NewButton } from "./button.new";

export interface ButtonProps {
  to?: string;
  variant?: string;
  block?: boolean;
  [property: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  to,
  variant = "primary",
  block = false,
  onClick = () => alert("button clicked"),
  ...props
}) => {
  const history = useHistory();

  const variants: {
    [variant: string]: { component: JSX.Element; extends: any };
  } = {
    primary: {
      component: <PrimaryButton {...props} />,
      extends: css``,
    },
    nav: {
      component: <NavButton {...props} />,
      extends: css``,
    },
    transparent: {
      component: <TransparentButton {...props} />,
      extends: css``,
    },
    hamburger: {
      component: <HamburgerButton {...props} />,
      extends: css``,
    },
    socialmedia: {
      component: <SocialMediaButton {...props} />,
      extends: css``,
    },
    link: {
      component: <LinkButton {...props} />,
      extends: css``,
    },
    confirm: {
      component: <ConfirmButton {...props} />,
      extends: css``,
    },
    email: {
      component: <EmailButton {...props} />,
      extends: css``,
    },
    launch: {
      component: <LaunchButton {...props} />,
      extends: css``,
    },
    reaction: {
      component: <ReactionButton {...props} />,
      extends: css``,
    },
    workspace: {
      component: <WorkspaceButton {...props} />,
      extends: css``,
    },
    getstarted: {
      component: <GetStartedButton {...props} />,
      extends: css``,
    },
    next: {
      component: <NextButton {...props} />,
      extends: css``,
    },
    square: {
      component: <SquareButton {...props} />,
      extends: css``,
    },
    auth: {
      component: <AuthButton {...props} />,
      extends: css``,
    },
    modal: {
      component: <ModalButton {...props} />,
      extends: css``,
    },
    close: {
      component: <CloseButton {...props} />,
      extends: css``,
    },
    search: {
      component: <SearchButton {...props} />,
      extends: css`
        width: 100%;
        display: block;
      `,
    },
    avatar: {
      component: <AvatarButton {...props} />,
      extends: css``,
    },
    add: {
      component: <AddButton {...props} />,
      extends: css``,
    },
    texteditor: {
      component: <TextEditorButton {...props} />,
      extends: css``,
    },
    new: {
      component: <NewButton {...props} />,
      extends: css``,
    },
  };

  return (
    <b.Button
      data-testid={`${variant}-button`}
      backgroundColor="transparent"
      display={block ? "block" : "inline-block"}
      width={block ? 1 : "auto"}
      extends={variants[variant].extends}
      onClick={to ? () => history.push(to) : onClick}
    >
      {variants[variant].component}
    </b.Button>
  );
};
