import * as React from "react";

import styled from "styled-components";
import * as b from "global/blocks";

// Imgs
import Thumbsup from "assets/img/thumbsup.png";

export const ReactionButton: React.FC<{}> = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  background-color: ${({ theme }) => theme.colors.white__dark};
  display: flex;
  width: fit-content;
  align-items: center;
  padding: 4px 6px;
  border-radius: 15px;
  margin-right: 5px;

  &:hover {
    padding: 0px 7px;
    border: 1px solid ${({ theme }) => theme.colors.gray__dark};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
