import * as React from "react";

import { Layout } from "components/layout/layout.component";
import { Content } from "components/organisms/content/content.component";

export const DraftWorkspace: React.FC<{}> = () => {
  return (
    <Layout
      variant="workspace"
      section="Drafts"
      subsection="No drafts"
      content={<Content variant="draft" />}
    />
  );
};
