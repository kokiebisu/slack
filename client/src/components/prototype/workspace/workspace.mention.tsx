import * as React from "react";

// Blocks
import * as b from "global/blocks";

// Svgs
import { AtSign, Close, Settings, Transition } from "assets/svg";

// Styles

import { Layout } from "components/layout/layout.component";
import { useTabTitle } from "hooks/useTabTitle";
import { Content } from "components/organisms/content/content.component";

export const MentionWorkspace: React.FC<{}> = () => {
  useTabTitle("Temporary");

  return (
    <Layout
      variant="workspace"
      section="Mentions & reactions"
      content={<Content variant="mention" />}
      options={
        <b.Box>
          <b.Flex alignItems="center">
            <IconWrapper className="sideoption" mr={2}>
              <Settings />
            </IconWrapper>
            <IconWrapper className="sideoption">
              <Transition />
            </IconWrapper>
          </b.Flex>
        </b.Box>
      }
    />
  );
};

const IconWrapper = styled(b.Box)`
  &.sideoption {
    padding: 8px 10px 6px 10px;
    background-color: transparent;
    &:hover {
      background-color: ${({ theme }) => theme.colors.white__dark};
      border-radius: 3px;
    }

    svg {
      width: 17px;
      height: 17px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;
