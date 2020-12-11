import React from "react";

/** variants */
import { SignInFooter } from "components/organisms/footer/footer.signin";
import { LandingFooter } from "components/organisms/footer/footer.landing";
import { FindFooter } from "components/organisms/footer/footer.find";

/** props */
export interface FooterProps {
  variant?: string;
  [x: string]: any;
}

export const Footer: React.FC<FooterProps> = ({
  variant = "landing",
  ...props
}) => {
  const variants = {
    landing: <LandingFooter {...props} />,
    signin: <SignInFooter {...props} />,
    find: <FindFooter {...props} />,
  };
  return <div data-testid={`${variant}-footer`}>{variants[variant]}</div>;
};
