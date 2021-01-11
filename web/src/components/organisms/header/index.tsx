import * as b from "global/blocks";

/** variants */
import { LandingHeader } from "components/organisms/header/header.landing";
import { CreateHeader } from "components/organisms/header/header.create";
import { ClientHeader } from "components/organisms/header/header.client";
import { FindHeader } from "./header.find";

export interface HeaderProps {
  variant: string;
  [property: string]: any;
}

export const Header: React.FC<HeaderProps> = ({ variant, ...props }) => {
  const variants: { [variant: string]: JSX.Element } = {
    landing: <LandingHeader {...props} />,
    create: <CreateHeader {...props} />,
    client: <ClientHeader {...props} />,
    find: <FindHeader {...props} />,
  };
  return (
    <b.Box height="100%" data-testid={`${variant}-header`}>
      {variants[variant]}
    </b.Box>
  );
};
