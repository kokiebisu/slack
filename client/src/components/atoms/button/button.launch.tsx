import React, { useContext } from "react";
import * as b from "global/blocks";
import styled, { ThemeContext } from "styled-components";

export const LaunchButton: React.FC<{ title?: string }> = ({
  title = "Button",
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper
      px={3}
      py={2}
      borderRadius={5}
      border="1px solid"
      backgroundColor={theme.colors.white}
      borderColor={theme.colors.gray__light}
    >
      <b.Text fontSize={15} fontFamily="SlackLato-Bold">
        {title}
      </b.Text>
    </Wrapper>
  );
};

export const Wrapper = styled(b.Box)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.white__dark};
  }
`;
