import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import * as b from "../../../global/blocks";

export const LinkButton: React.FC<{ url?: string; title?: string }> = ({
  url = "/",
  title = "Button",
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper my={2}>
      <b.Anchor href={url}>
        <b.Box py={1}>
          <b.Text
            color={theme.colors.gray}
            fontSize={14}
            fontFamily="SlackLato-Light"
          >
            {title}
          </b.Text>
        </b.Box>
      </b.Anchor>
    </Wrapper>
  );
};

export const Wrapper = styled(b.Box)`
  &:hover {
    color: ${({ theme }) => theme.colors.gray__dark};
  }
`;
