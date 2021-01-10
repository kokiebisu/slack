import * as React from "react";
import { useParams, useHistory } from "react-router";

// Blocks
import * as b from "global/blocks";

// Svgs
import { Lock, FatHashTag } from "assets/svg";

// Styles
import { Wrapper, Name, IconWrapper } from "styles/Workspace/Sidebar/Channel";

interface Props {
  id: string;
  name: string;
  isPublic: boolean;
}

export const Channel: React.FC<Props> = ({ id, name, isPublic }) => {
  const { teamId } = useParams<{ teamId: string }>();

  const history = useHistory();

  return (
    <Wrapper
      onClick={() => {
        history.push(`/client/${teamId}/channel/${id}`);
      }}
    >
      <b.Flex alignItems="center">
        <IconWrapper className="tag" pr={2}>
          {isPublic ? <FatHashTag /> : <Lock />}
        </IconWrapper>
        <Name>
          <b.Text>{name}</b.Text>
        </Name>
      </b.Flex>
    </Wrapper>
  );
};
