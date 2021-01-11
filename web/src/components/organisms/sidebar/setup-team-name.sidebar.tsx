import React, { useContext } from "react";
import * as b from "global/blocks";
import { ThemeContext } from "styled-components";

export const SetupTeamNameSidebar: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box px={3} pb={4} pt={3} bg={theme.colors.primary__lighter}>
      <b.Text
        color={theme.colors.white}
        fontSize={13}
        fontFamily="SlackLato-Bold"
      >
        Fintros
      </b.Text>
    </b.Box>
  );
};
