import React from "react";
import styled from "styled-components";

/** vectors */
import { Gmail, Outlook } from "assets/svg/Logo";

/** styles */
import * as b from "global/blocks";

export const EmailButton: React.FC<{ platform?: string }> = ({
  platform = "outlook",
}) => {
  const platforms = {
    outlook: <Outlook />,
    gmail: <Gmail />,
  };
  return (
    <b.Flex>
      <IconWrapper className="outlook" mr={2}>
        {platforms[platform]}
      </IconWrapper>
      <b.Box className="option">
        <b.Text>Open {platform}</b.Text>
      </b.Box>
    </b.Flex>
  );
};

const IconWrapper = styled(b.Box)`
  position: relative;
  &.gmail {
    bottom: 2px;
    svg {
      width: 20px;
      height: 20px;
      path {
      }
    }
  }

  &.outlook {
    bottom: 1px;
    svg {
      width: 20px;
      height: 20px;
      path {
      }
    }
  }
`;
