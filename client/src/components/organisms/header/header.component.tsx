import React from "react";

/** components */
import { LandingHeader } from "components/organisms/header/header.landing";
import { CreateHeader } from "components/organisms/header/header.create";
import { SignInHeader } from "components/organisms/header/header.signin";

/** props */
import { HeaderProps } from "./props";

export const Header: React.FC<HeaderProps> = ({
  type = "landing",
  ...props
}) => {
  const types = {
    landing: <LandingHeader {...props} />,
    create: <CreateHeader {...props} />,
    signin: <SignInHeader {...props} />,
  };
  return <div>{types[type]}</div>;
};
