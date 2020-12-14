import React, { useContext } from "react";

import * as b from "global/blocks";

import { ThemeContext } from "styled-components";

import { Button } from "components/atoms/button/button.component";

export const AvailableCard: React.FC<{
  name?: string;
  url?: string;
  avatarBackground?: string;
  onClick?: () => void;
}> = ({
  name = "Channel",
  url,
  avatarBackground = "red",
  onClick = () => alert("pressed"),
}) => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box
      width={1}
      height={90}
      borderBottom="1px solid"
      borderColor={theme.colors.gray__lighter}
    >
      <b.Flex alignItems="center" justifyContent="space-between">
        <b.Box>
          <b.Flex>
            <b.Box mr={3}>
              <b.Box
                backgroundColor={avatarBackground}
                width={50}
                height={50}
                border="3px solid"
                borderColor={theme.colors.gray__lighter}
                borderRadius={8}
              >
                <b.Flex alignItems="center" justifyContent="center">
                  <b.Box>
                    <b.Text
                      color="white"
                      fontFamily="SlackLato-Bold"
                      fontSize={18}
                    >
                      {name.charAt(0).toUpperCase()}
                    </b.Text>
                  </b.Box>
                </b.Flex>
              </b.Box>
            </b.Box>
            <b.Box>
              <b.Flex alignItems="center">
                <b.Box>
                  <b.Box mb={2}>
                    <b.Text fontFamily="SlackLato-Bold">{name}</b.Text>
                  </b.Box>
                  <b.Box>
                    <b.Text fontSize={13} color={theme.colors.gray__light}>
                      {url}.slack.com
                    </b.Text>
                  </b.Box>
                </b.Box>
              </b.Flex>
            </b.Box>
          </b.Flex>
        </b.Box>
        <Button variant="launch" onClick={onClick} title="Launch" />
      </b.Flex>
    </b.Box>
  );
};
