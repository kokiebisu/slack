import React from "react";

/** vectors */
import { Gmail, Outlook } from "../../../assets/svg/Logo";

/** styles */
import * as b from "../../../global/blocks";

export const EmailButton: React.FC<{ type?: string }> = ({
  type = "outlook",
}) => {
  const types: { [type: string]: JSX.Element } = {
    outlook: <Outlook width={20} height={20} />,
    gmail: <Gmail width={20} height={20} />,
  };
  return (
    <b.Flex alignItems="center">
      <b.Box className="outlook" mr={2}>
        {types[type]}
      </b.Box>
      <b.Box>
        <b.Text fontSize={15} capitalize>
          Open {type}
        </b.Text>
      </b.Box>
    </b.Flex>
  );
};
