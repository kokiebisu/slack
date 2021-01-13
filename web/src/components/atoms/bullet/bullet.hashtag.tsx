import React, { useContext } from "react";
import styled from "styled-components";

import * as b from "global/blocks";

import { ThinHashTag } from "assets/svg";

import { ThemeContext } from "styled-components";

export const HashtagBullet: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box bottom={1.5}>
      <ThinHashTag width={8} height={8} fill={theme.colors.pink__light} />
    </b.Box>
  );
};
