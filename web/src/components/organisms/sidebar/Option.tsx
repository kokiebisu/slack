import * as React from "react";
import { useHistory, useParams } from "react-router-dom";

// Blocks
import * as b from "global/blocks";

// Svgs
import {
  Threads,
  MentionReaction,
  People,
  Drafts,
  SavedItems,
  Apps,
  Files,
  ThinHashTag,
} from "assets/svg";

// Styles
import {
  Wrapper,
  IconWrapper,
  TextWrapper,
  Title,
} from "styles/Workspace/Sidebar/Option";

interface Props {
  name: string;
  link: string;
}

export const Option: React.FC<Props> = ({ name, link }) => {
  const displayingName = name.charAt(0).toUpperCase() + name.slice(1);
  const history = useHistory();
  const { teamId } = useParams<{ teamId: string }>();

  return (
    <Wrapper
      onClick={() => {
        history.push(`/client/${teamId}/${link}`);
      }}
    >
      <b.Flex>
        <IconWrapper>{renderOption(name)}</IconWrapper>
        <TextWrapper>
          <Title fontFamily="SlackLato-Light" fontSize={14}>
            {displayingName}
          </Title>
        </TextWrapper>
      </b.Flex>
    </Wrapper>
  );
};

const renderOption = (option: string) => {
  switch (option) {
    case "threads":
      return <Threads />;
    case "mentions & reactions":
      return <MentionReaction />;
    case "drafts":
      return <Drafts />;
    case "saved items":
      return <SavedItems />;
    case "channel browser":
      return <ThinHashTag />;
    case "people":
      return <People />;
    case "apps":
      return <Apps />;
    case "files":
      return <Files />;
    default:
      return;
  }
};
