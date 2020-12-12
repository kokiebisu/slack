import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

export interface ButtonProps {
  to?: string;
  variant?: string;
  [x: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  to,
  variant = "primary",
  ...props
}) => {
  const variants = {
    primary: <PrimaryButton {...props} />,
    nav: <NavButton {...props} />,
    transparent: <TransparentButton {...props} />,
    hamburger: <HamburgerButton {...props} />,
    socialmedia: <SocialMediaButton {...props} />,
    link: <LinkButton {...props} />,
    confirm: <ConfirmButton {...props} />,
    email: <EmailButton {...props} />,
    launch: <LaunchButton {...props} />,
    reaction: <ReactionButton {...props} />
  };
  if (to) {
    return <Link to={to}>{variants[variant]}</Link>;
  }
  return <motion.div>{variants[variant]}</motion.div>;
};
