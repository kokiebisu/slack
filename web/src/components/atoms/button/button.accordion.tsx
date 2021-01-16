import { Plus, RightArrow } from "assets/svg";
import * as b from "global/blocks";
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

export const AccordionButton: React.FC<{ title?: string }> = ({ title }) => {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper px={3} py={1} width={1}>
      <b.Flex justifyContent="space-between" alignItems="center">
        <b.Box>
          <b.Flex alignItems="center">
            <b.Box mr={2}>
              <RightArrow
                width={8}
                height={8}
                fill={theme.colors.white__dark}
              />
            </b.Box>
            <b.Box>
              <b.Text
                fontSize={15}
                color={theme.colors.white__dark}
                fontFamily="SlackLato-Light"
              >
                {title}
              </b.Text>
            </b.Box>
          </b.Flex>
        </b.Box>
        <PlusWrapper className="plus-wrapper" p={2} borderRadius={4}>
          <Plus
            width={13}
            height={13}
            fill={theme.colors.white__dark}
            strokeWidth={2}
          />
        </PlusWrapper>
      </b.Flex>
    </Wrapper>
  );
};

export const Wrapper = styled(b.Box)`
  & div.plus-wrapper {
    opacity: 0;
  }
  &:hover {
    & .plus-wrapper {
      opacity: 1;
    }
  }
`;

export const PlusWrapper = styled(b.Box)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary__lighter};
  }
`;
