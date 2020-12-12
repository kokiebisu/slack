import * as React from "react";
import styled, { css } from "styled-components";

import * as b from "global/blocks";

import { ThinHashTag } from "assets/svg";

// Styles
import { IconWrapper } from "styles/CreateTeam/Mockup";

export const HashtagBullet = () => {
  return (
    <IconWrapper>
      <ThinHashTag />
    </IconWrapper>
  );
};
