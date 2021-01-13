import React, { useContext } from "react";
import * as b from "global/blocks";
import styled, { ThemeContext } from "styled-components";

export const TransparentButton: React.FC<{
  content?: any;
  px?: number;
  py?: number;
}> = ({
  content = (
    <b.Text nowrap fontSize={15}>
      Transparent Button
    </b.Text>
  ),
  px,
  py,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper
      display="inline-block"
      borderRadius={3}
      px={px}
      py={py}
      backgroundColor="transparent"
      border="none"
      color={theme.colors.gray__dark}
    >
      {content}
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  white-space: nowrap;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    border-color: ${({ theme }) => theme.colors.gray};
    text-decoration: underline;
  }
`;
