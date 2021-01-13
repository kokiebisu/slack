import React, { useContext } from "react";
import * as b from "global/blocks";
import styled, { ThemeContext } from "styled-components";

export const SetupTeamNameSidebar: React.FC<{ label?: string }> = ({
  label,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box px={3} pb={4} pt={2} bg={theme.colors.primary__lighter}>
      {label ? (
        <b.Text
          color={theme.colors.white}
          fontSize={13}
          fontFamily="SlackLato-Bold"
        >
          {label}
        </b.Text>
      ) : (
        <Placeholder />
      )}
    </b.Box>
  );
};

const Placeholder = styled.div`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.purple};
  width: 100px;
  height: 14px;
`;
