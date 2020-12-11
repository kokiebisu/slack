import React from "react";
import styled from "styled-components";
import * as b from "../../../global/blocks";

export const LinkButton: React.FC<{ url?: string; name?: string }> = ({
  url = "/",
  name = "Button",
}) => {
  return (
    <Item>
      <b.Anchor href={url}>
        <b.Box py={1}>
          <b.Text color="gray">{name}</b.Text>
        </b.Box>
      </b.Anchor>
    </Item>
  );
};

export const Item = styled.li`
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
