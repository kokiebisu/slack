import * as b from "global/blocks";

import { SetupTeamNameSidebar } from "./setup-team-name";
import { SetupChannelsSidebar } from "./setup-channels";
import { SetupInvitesSidebar } from "./setup-invites";

interface SidebarProps {
  variant: string;
  [property: string]: any;
}

export const Sidebar: React.FC<SidebarProps> = ({ variant, ...props }) => {
  const variants: { [variant: string]: JSX.Element } = {
    "setup-team-name": <SetupTeamNameSidebar {...props} />,
    "setup-channels": <SetupChannelsSidebar {...props} label="Team" />,
    "setup-invites": <SetupInvitesSidebar {...props} label="Team" />,
  };

  return <b.Box>{variants[variant]}</b.Box>;
};
