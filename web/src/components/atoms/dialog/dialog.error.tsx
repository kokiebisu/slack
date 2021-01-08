import React, { useContext } from "react";
import * as b from "global/blocks";
import { Warning } from "assets/svg";
import { ThemeContext } from "styled-components";

export const ErrorDialog: React.FC<{ error?: string }> = ({
  error = "Error!",
}) => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box>
      <b.Flex justifyContent="center">
        {error && (
          <b.Box
            width={1}
            backgroundColor={theme.colors.pink__lighter}
            borderRadius={3}
            border="1px solid"
            borderColor={theme.colors.pink}
            pl={3}
            py={2}
            pr={4}
          >
            <b.Flex alignItems="center">
              <b.Box className="warning" mr={2}>
                <Warning width={15} height={15} fill={theme.colors.pink} />
              </b.Box>
              <b.Box py={2}>
                <b.Text fontFamily="SlackLato-Regular" fontSize={14}>
                  {error}
                </b.Text>
              </b.Box>
            </b.Flex>
          </b.Box>
        )}
      </b.Flex>
    </b.Box>
  );
};
