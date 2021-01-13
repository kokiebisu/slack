import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import * as b from "global/blocks";

/** assets */
import { Hamburger } from "assets/svg";

export const HamburgerButton: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box border="none" backgroundColor="transparent">
      <Hamburger width={25} fill={theme.colors.black} />
    </b.Box>
  );
};
