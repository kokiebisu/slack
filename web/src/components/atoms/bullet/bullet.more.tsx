import React from "react";
import * as b from "global/blocks";

import styled from "styled-components";
import { size } from "global/sizes";

export const MoreBullet: React.FC<{ more?: string }> = ({
  more = "Content",
}) => {
  return (
    <b.Box>
      <Flex>
        <b.Text color="blue" fontSize={18}>
          Learn more about {more}
        </b.Text>
        <b.Text color="blue" fontSize={18}>
          &nbsp;→
        </b.Text>
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
