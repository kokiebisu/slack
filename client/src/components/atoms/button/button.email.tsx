import React from "react";

/** vectors */
import { Gmail, Outlook } from "assets/svg/Logo";

/** styles */
import * as b from "global/blocks";

export const EmailButton: React.FC<{ platform?: string }> = ({
  platform = "outlook",
}) => {
  const platforms = {
    outlook: <Outlook width={20} height={20} />,
    gmail: <Gmail width={20} height={20} />,
  };
  return (
    <b.Flex>
      <b.Box className="outlook" mr={2} bottom={1}>
        {platforms[platform]}
      </b.Box>
      <b.Box className="option">
        <b.Text>Open {platform}</b.Text>
      </b.Box>
    </b.Flex>
  );
};
