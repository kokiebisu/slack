import React from "react";

// Blocks
import * as b from "global/blocks";

// Svgs
import { Bookmark } from "assets/svg";
import styled from "styled-components";

export const SavedContent: React.FC<{}> = () => {
  return (
    <Wrapper>
      <b.Flex justifyContent="center" alignItems="center">
        <Bottom>
          <IconWrapper className="bookmark">
            <Bookmark />
          </IconWrapper>
          <b.Box pt={3} pb={2}>
            <b.Text fontSize={17} fontFamily="SlackLato-Bold" color="black">
              Save messages and files to come back to later
            </b.Text>
          </b.Box>
          <b.Box>
            <b.Text
              fontSize={15}
              fontFamily="SlackLato-Regular"
              color="gray__light"
            >
              Mark your to-dos or save something for another time. Only you can
              see your saved items, so use them however you’d like.
            </b.Text>
          </b.Box>
        </Bottom>
      </b.Flex>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  height: 100%;
`;

const Bottom = styled(b.Box)`
  max-width: 420px;
  text-align: center;
`;

const SideOption = styled(b.Button)`
  padding: 8px 10px 6px 10px;
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white__dark};
    border-radius: 3px;
  }
`;

const IconWrapper = styled(b.Box)`
  &.bookmark {
    svg {
      width: 26px;
      height: 26px;
      path {
        fill: ${({ theme }) => theme.colors.pink__dark};
      }
    }
  }

  &.transition {
    svg {
      width: 17px;
      height: 17px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;
