import * as React from "react";
import { useEffect } from "react";

// Components
import { Activities } from "components/Workspace/Content/Activities";

// Blocks
import * as b from "global/blocks";

// Svgs
import { AtSign, Close, Settings, Transition } from "assets/svg";

// Styles
import {
  Bottom,
  IconWrapper,
  Notice,
  NoticeTitle,
  NoticeDescription,
} from "styles/Workspace/Page/Mention";
import { Layout } from "components/layout/layout.component";

export const MentionPage: React.FC<{}> = () => {
  const group = "temporary";
  useEffect(() => {
    document.title = `Mentions & reactions | ${group}`;
  }, [group]);

  return (
    <Layout
      variant="workspace"
      section="Mentions & reactions"
      content={<ContentLayout />}
      options={<Options />}
    />
  );
};

const ContentLayout = () => {
  return (
    <Bottom>
      <Notice p={3}>
        <b.Box>
          <b.Flex justifyContent="space-between">
            <NoticeTitle>
              <b.Flex alignItems="center">
                <IconWrapper className="atsign" mr={2}>
                  <AtSign />
                </IconWrapper>
                <b.Box mb={1}>
                  <b.Text>See new activity in real time</b.Text>
                </b.Box>
              </b.Flex>
            </NoticeTitle>
            <IconWrapper className="close">
              <Close />
            </IconWrapper>
          </b.Flex>
        </b.Box>
        <NoticeDescription mt={3}>
          <b.Text>
            When people react to your messages or mention you or your keywords,
            you’ll see it here.
          </b.Text>
        </NoticeDescription>
      </Notice>
      <Activities />
    </Bottom>
  );
};

const Options = () => {
  return (
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
  );
};
