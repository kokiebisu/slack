import React from "react";

// Blocks
import * as b from "global/blocks";

// Svgs
import { Bookmark } from "assets/svg";
import { Transition } from "assets/svg";

import { Layout } from "components/layout/layout.component";
import { Content } from "components/organisms/content/content.component";

export const SavedWorkspace: React.FC<{}> = () => {
  return (
    <Layout
      variant="workspace"
      section="Saved items"
      content={<Content variant="saved" />}
      options={<div>saved</div>}
    />
  );
};
