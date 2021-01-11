import * as b from "global/blocks";

import { SetupChannelsClient } from "./setup-channels";
import { SetupInvitesClient } from "./setup-invites";
import { SetupTeamNameClient } from "./setup-team-name";

export interface PrototypeProps {
  variant: string;
  [property: string]: any;
}

export const Prototype: React.FC<PrototypeProps> = ({ variant, ...props }) => {
  const variants: { [variant: string]: JSX.Element } = {
    "setup-team-name": <SetupTeamNameClient {...props} />,
    "setup-channels": <SetupChannelsClient {...props} />,
    "setup-invites": <SetupInvitesClient {...props} />,
  };
  return <b.Box>{variants[variant]}</b.Box>;
};
