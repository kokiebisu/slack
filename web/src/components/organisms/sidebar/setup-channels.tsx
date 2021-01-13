import React, { useContext } from "react";
import * as b from "global/blocks";
import styled, { ThemeContext } from "styled-components";

export const SetupChannelsSidebar: React.FC<{ label?: string }> = ({
  label,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box
      px={3}
      py={20}
      bg={theme.colors.primary}
      borderBottom="1px solid"
      borderColor={theme.colors.primary__lighter}
    >
      <b.Text
        color={theme.colors.white}
        fontSize={13}
        fontFamily="SlackLato-Bold"
      >
        {label}
      </b.Text>
    </b.Box>
  );
};
