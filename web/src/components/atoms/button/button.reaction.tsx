import React, { useContext } from "react";

import { ThemeContext } from "styled-components";
import * as b from "global/blocks";

// Imgs
import Thumbsup from "assets/img/thumbsup.png";

export const ReactionButton: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box
      py={1}
      px={2}
      borderRadius={15}
      backgroundColor={theme.colors.white__dark}
    >
      <b.Flex alignItems="center">
        <b.Box mr={1}>
          <img width={14} height={14} src={Thumbsup} alt="icon" />
        </b.Box>
        <b.Box>
          <b.Text fontSize={11} fontFamily="SlackLato-Regular">
            1
          </b.Text>
        </b.Box>
      </b.Flex>
    </b.Box>
  );
};
