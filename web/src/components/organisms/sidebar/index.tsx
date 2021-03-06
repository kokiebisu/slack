import * as b from "global/blocks";

import { SetupTeamNameSidebar } from "./setup-team-name";
import { SetupChannelsSidebar } from "./setup-channels";
import { SetupInvitesSidebar } from "./setup-invites";
import { PlainSidebar } from "./plain";

export interface SidebarProps {
  variant?: string;
  [property: string]: any;
}

export const Sidebar: React.FC<SidebarProps> = ({ variant, ...props }) => {
  // label="team" is a temporary thing
  const variants: { [variant: string]: JSX.Element } = {
    "setup-team-name": <SetupTeamNameSidebar {...props} />,
    "setup-channels": <SetupChannelsSidebar {...props} label="Team" />,
    "setup-invites": <SetupInvitesSidebar {...props} label="Team" />,
  };

  return (
    <b.Box height="100%" data-testid={`${variant}-sidebar`}>
      {variant ? variants[variant] : <PlainSidebar {...props} label="Team" />}
    </b.Box>
  );
};
