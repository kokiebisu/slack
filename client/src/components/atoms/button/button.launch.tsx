import React from "react";
import * as b from "global/blocks";
import styled from "styled-components";

export const LaunchButton: React.FC<{ title?: string }> = ({
  title = "Button",
}) => {
  return <Wrapper>{title}</Wrapper>;
};

export const Wrapper = styled(b.Button)`
  padding: 8px 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray__lighter};
  & > p {
    font-size: 15px;
    font-family: "SlackLato-Bold";
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white__dark};
  }
`;
