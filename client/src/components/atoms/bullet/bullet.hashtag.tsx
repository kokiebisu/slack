import * as React from "react";
import styled, { css } from "styled-components";

import * as b from "global/blocks";

import { ThinHashTag } from "assets/svg";

export const HashtagBullet = () => {
  return (
    <IconWrapper>
      <ThinHashTag />
    </IconWrapper>
  );
};

const IconWrapper = styled(b.Box)`
  position: relative;
  bottom: 1.5px;
  svg {
    width: 8px;
    height: 8px;
    path {
      fill: ${({ theme }) => theme.colors.pink__light};
    }
  }
`;
