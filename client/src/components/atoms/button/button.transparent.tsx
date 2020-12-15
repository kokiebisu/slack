import React, { useContext } from "react";
import * as b from "global/blocks";
import styled, { ThemeContext } from "styled-components";

export const TransparentButton: React.FC<{
  content?: any;
}> = ({ content = <b.Text nowrap>Transparent Button</b.Text> }) => {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper
      display="inline-block"
      borderRadius={3}
      px={4}
      py={3}
      backgroundColor="transparent"
      border="none"
      color={theme.colors.gray__dark}
    >
      {content}
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    border-color: ${({ theme }) => theme.colors.gray};
    text-decoration: underline;
  }
`;
