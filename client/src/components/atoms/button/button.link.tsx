import React from "react";
import styled from "styled-components";
import * as b from "../../../global/blocks";

export const LinkButton: React.FC<{ url?: string; title?: string }> = ({
  url = "/",
  title = "Button",
}) => {
  return (
    <Item>
      <b.Anchor href={url}>
        <b.Box py={1}>
          <b.Text color="gray">{title}</b.Text>
        </b.Box>
      </b.Anchor>
    </Item>
  );
};

export const Item = styled.div`
  list-style: none;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.79rem;
  font-family: "SlackLato-Light";
  margin: 5px 0;

  &:hover {
    color: ${({ theme }) => theme.colors.gray__dark};
    cursor: pointer;
  }
`;
