import React from "react";
import styled from "styled-components";

import { CheckCircle } from "assets/svg";

import * as b from "global/blocks";

export const CheckBullet: React.FC<{ title?: string }> = ({
  title = "Bullet point here",
}) => {
  return (
    <div>
      <b.Flex alignItems="center">
        <IconWrapper mr={3}>
          <CheckCircle width={18} height={18} />
        </IconWrapper>
        <b.Box>{title}</b.Box>
      </b.Flex>
    </div>
  );
};

const IconWrapper = styled(b.Box)`
  & path {
    fill: ${({ theme }) => theme.colors.gray};
  }
`;
