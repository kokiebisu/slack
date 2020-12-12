import * as React from "react";

// Hooks
import { useTabTitle } from "hooks/useTabTitle";

// Components
import { Layout } from "components/layout/layout.component";
import { Content } from "components/organisms/content/content.component";

export const ThreadsWorkspace: React.FC<{}> = () => {
  useTabTitle("Threads");

  return (
    <Layout
      variant="workspace"
      section="Threads"
      subsection="No new replies"
      content={<Content variant="thread" />}
    />
  );
};
