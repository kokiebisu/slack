import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

// Blocks
import * as b from "global/blocks";

// Components
import { Options } from "./Options";
import { SidebarSections } from "./Sections";
import { Profile } from "./Profile";

// Query
import { useTeamQuery } from "generated/graphql";

// Styles
import { Wrapper } from "styles/Workspace/Sidebar";

interface Props {
  team?: string;
  displayMenu?: () => void;
}

export const Sidebar: React.FC<Props> = ({ displayMenu }) => {
  const [hovered, setHovered] = useState(false);
  const { teamId } = useParams<{ teamId: string }>();
  const { data: { team } = {} } = useTeamQuery({
    variables: { teamId },
  });

  return (
    <>
      <Wrapper>
        <b.Box
          className={hovered ? "profile hovered" : "profile"}
          onClick={displayMenu}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {team && team.team && <Profile team={team.team} hovered={hovered} />}
        </b.Box>
        <b.Box className="sidebar" style={{ overflowY: "scroll" }}>
          <Options />
          <SidebarSections />
        </b.Box>
      </Wrapper>
    </>
  );
};
