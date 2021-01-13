import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { CheckCircle } from "assets/svg";

import * as b from "global/blocks";

export const CheckBullet: React.FC<{ title?: string }> = ({
  title = "Bullet point here",
}) => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <b.Flex alignItems="center">
        <b.Box mr={3}>
          <CheckCircle width={18} height={18} fill={theme.colors.gray} />
        </b.Box>
        <b.Box>
          <b.Text>{title}</b.Text>
        </b.Box>
      </b.Flex>
    </div>
  );
};
