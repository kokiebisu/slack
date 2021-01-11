import * as React from "react";

// Blocks
import * as b from "global/blocks";
import { SetupTeamNameSidebar } from "./setup-team-name.sidebar";

interface SidebarProps {
  variant: string;
  [property: string]: any;
}

export const Sidebar: React.FC<SidebarProps> = ({ variant, ...props }) => {
  const variants: { [variant: string]: JSX.Element } = {
    "setup-team-name": <SetupTeamNameSidebar {...props} />,
  };

  return <b.Box>{variants[variant]}</b.Box>;
};
