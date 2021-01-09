import * as React from "react";
import { useState } from "react";

// Blocks
import * as b from "../../../global/blocks";

// Components
import { Option } from "./Option";

// Svgs
import { ShowLess } from "../../../assets/svg";
import {
  OptionsWrapper,
  IconWrapper,
  TextWrapper,
  Title,
  ShowLessWrapper,
} from "../../../styles/Workspace/Sidebar/Options";

interface Props {}

export const Options: React.FC<Props> = () => {
  const [display, setDisplay] = useState(true);

  const arrow = {
    initial: {
      y: 3,
      rotate: 0,
      transition: {
        duration: 0.3,
      },
    },
    animate: {
      y: 0,
      rotate: 180,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <OptionsWrapper>
      <b.Box>
        <Option name="threads" link="threads" />
        <Option name="mentions & reactions" link="activity-page" />
        {display ? (
          <>
            <Option name="drafts" link="drafts" />
            <Option name="saved items" link="saved-page" />
            <Option name="channel browser" link="browse-channels" />
            <Option name="people" link="browse-people" />
            <Option name="apps" link="apps" />
            <Option name="files" link="browse-files" />
          </>
        ) : null}

        <ShowLessWrapper onClick={() => setDisplay(!display)}>
          <b.Flex>
            <IconWrapper
              animate={display ? "initial" : "animate"}
              variants={arrow}
            >
              <ShowLess />
            </IconWrapper>
            <TextWrapper>
              <Title fontFamily="SlackLato-Light" fontSize={15}>
                Show less
              </Title>
            </TextWrapper>
          </b.Flex>
        </ShowLessWrapper>
      </b.Box>
    </OptionsWrapper>
  );
};
