import React from "react";
import styled from "styled-components";

import { CheckCircle } from "assets/svg";

import * as b from "global/blocks";

export const CheckBullet: React.FC<{ title?: string }> = ({
  title = "Bullet point here",
}) => {
  return (
    <b.Flex>
      <IconWrapper className="checkcircle">
        <b.Box>
          <CheckCircle />
        </b.Box>
      </IconWrapper>
      <b.Box>{title}</b.Box>
    </b.Flex>
  );
};

const IconWrapper = styled(b.Box)`
  display: flex;
  align-items: center;
  margin-right: 10px;
  & > div {
    & > svg {
      width: 18px;
      height: 18px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;
