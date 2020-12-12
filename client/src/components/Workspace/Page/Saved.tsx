import React from "react";

// Blocks
import * as b from "global/blocks";

// Svgs
import { Bookmark } from "assets/svg";
import { Transition } from "assets/svg";

// Styles
import {
  Wrapper,
  SideOption,
  IconWrapper,
  Bottom,
} from "styles/Workspace/Page/Saved";
import { Layout } from "components/layout/layout.component";

export const SavedPage: React.FC<{}> = () => {
  return (
    <Layout
      variant="workspace"
      section="Saved items"
      content={<ContentLayout />}
      options={<Options />}
    />
  );
};

const ContentLayout = () => {
  return (
    <Wrapper>
      <b.Flex justifyContent="center" alignItems="center">
        <Bottom>
          <IconWrapper className="bookmark">
            <Bookmark />
          </IconWrapper>
          <b.Box pt={3} pb={2}>
            <b.Text fontSize={17} fontFamily="SlackLato-Bold" color="black">
              Save messages and files to come back to later
            </b.Text>
          </b.Box>
          <b.Box>
            <b.Text
              fontSize={15}
              fontFamily="SlackLato-Regular"
              color="gray__light"
            >
              Mark your to-dos or save something for another time. Only you can
              see your saved items, so use them however you’d like.
            </b.Text>
          </b.Box>
        </Bottom>
      </b.Flex>
    </Wrapper>
  );
};

const Options = () => {
  return (
    <SideOption>
      <IconWrapper className="transition">
        <Transition />
      </IconWrapper>
    </SideOption>
  );
};
