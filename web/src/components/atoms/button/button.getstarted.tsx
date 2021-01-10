import React, { useContext } from "react";
import * as b from "global/blocks";
import { ThemeContext } from "styled-components";

// Svg
import { BoldPlus } from "assets/svg";

export const GetStartedButton: React.FC<{ type?: string }> = ({
  type = "signin",
}) => {
  const theme = useContext(ThemeContext);
  const types: { [type: string]: JSX.Element } = {
    signin: (
      <b.Text fontSize={19} color="primary" fontFamily="SlackLato-Bold" nowrap>
        Sign in to Slack
      </b.Text>
    ),
    signup: (
      <b.Flex alignItems="center" justifyContent="center">
        <b.Box mr={2}>
          <BoldPlus width={13} height={13} fill={theme.colors.primary} />
        </b.Box>
        <b.Box>
          <b.Text
            fontSize={19}
            color="primary"
            fontFamily="SlackLato-Bold"
            nowrap
          >
            Create a Slack workspace
          </b.Text>
        </b.Box>
      </b.Flex>
    ),
  };
  return (
    <b.Box
      border="0.5px solid"
      backgroundColor={theme.colors.white}
      borderColor={theme.colors.gray__light}
      py={3}
      borderRadius={5}
    >
      <b.Flex justifyContent="center">
        <b.Box px={3}>{types[type]}</b.Box>
      </b.Flex>
    </b.Box>
  );
};
