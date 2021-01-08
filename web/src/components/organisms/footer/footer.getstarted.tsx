import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import * as b from "global/blocks";
import { Button } from "components/atoms/button/button.component";
import { Globe } from "assets/svg";

export const GetStartedFooter: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Flex alignItems="center" justifyContent="center">
      <b.Box mr={2}>
        <Button variant="transparent" to="/legal" title="Privacy & terms" />
      </b.Box>
      <b.Box mr={2}>
        <Button variant="transparent" to="/help" title="Contact us" />
      </b.Box>
      <b.Box mr={2}>
        <b.Flex>
          <b.Box top={0.5} mr={1}>
            <Globe width={12} height={12} fill={theme.colors.gray} />
          </b.Box>
          <b.Box>
            <b.Box>Change region</b.Box>
          </b.Box>
        </b.Flex>
      </b.Box>
    </b.Flex>
  );
};
