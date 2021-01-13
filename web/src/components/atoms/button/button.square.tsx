import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import * as b from "../../../global/blocks";

export const SquareButton: React.FC<{ title?: string }> = ({
  title = "Button",
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper
      px={3}
      py={3}
      borderRadius={3}
      color={theme.colors.gray__dark}
      mr={2}
    >
      <b.Text fontSize={15}>{title}</b.Text>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  border: 2px solid ${({ theme }) => theme.colors.gray__dark};

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
    border-color: ${({ theme }) => theme.colors.gray};
  }
`;
