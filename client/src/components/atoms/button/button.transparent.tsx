import React from "react";
import * as b from "global/blocks";
import styled from "styled-components";

export const TransparentButton: React.FC<{
  title?: string;
}> = ({ title = "Transparent Button" }) => {
  return (
    <Wrapper>
      <b.Text>{title}</b.Text>
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  display: inline-block;
  padding: 8px 13px;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.gray__dark};
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    border-color: ${({ theme }) => theme.colors.gray};
    text-decoration: underline;
  }
`;

const H3 = styled(b.Text)`
  white-space: nowrap;
`;
