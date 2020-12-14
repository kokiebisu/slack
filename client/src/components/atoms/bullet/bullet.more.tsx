import React from "react";
import * as b from "global/blocks";

import styled from "styled-components";
import { size } from "global/sizes";

export const MoreBullet: React.FC<{ more?: string }> = ({
  more = "Content",
}) => {
  return (
    <b.Box fontSize={18} color="blue">
      <Flex>
        <b.Text>Learn more about {more}</b.Text>
        <b.Text>&nbsp;→</b.Text>
      </Flex>
    </b.Box>
  );
};

const Flex = styled(b.Flex)`
  justify-content: center;
  @media ${size.lg} {
    justify-content: flex-start;
  }
`;
