import * as b from "global/blocks";

/** variants */
import { GetStartedLayout } from "./layout.getstarted";
import { WorkspaceLayout } from "./layout.workspace";
import { ContentLayout } from "./layout.content";

export interface LayoutProps {
  variant: string;
  [property: string]: any;
}

export const Layout: React.FC<LayoutProps> = ({ variant, ...props }) => {
  const variants: { [variant: string]: JSX.Element } = {
    workspace: <WorkspaceLayout {...props} />,
    "get-started": <GetStartedLayout {...props} />,
    content: <ContentLayout {...props} />,
  };
  return (
    <b.Box height="100%" data-testid={`${variant}-layout`}>
      {variants[variant]}
    </b.Box>
  );
};
