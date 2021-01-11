import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import * as b from "../../../global/blocks";
import { Button } from "../../atoms/button";
import { Globe } from "../../../assets/svg";

export const GetStartedFooter: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  return (
    <b.Flex alignItems="center" justifyContent="center">
      <b.Box>
        <Button
          variant="transparent"
          px={4}
          py={3}
          to="/legal"
          content={<b.Text fontSize={15}>Privacy & terms</b.Text>}
        />
      </b.Box>
      <b.Box>
        <Button
          variant="transparent"
          px={4}
          py={3}
          to="/help"
          content={<b.Text fontSize={15}>Contact us</b.Text>}
        />
      </b.Box>
      <b.Box>
        <Button
          variant="transparent"
          px={4}
          py={3}
          content={
            <b.Flex alignItems="center">
              <b.Box top={0.5} mr={1}>
                <Globe width={14} height={14} fill={theme.colors.gray} />
              </b.Box>
              <b.Box>
                <b.Box>
                  <b.Text fontSize={15}>Change region</b.Text>
                </b.Box>
              </b.Box>
            </b.Flex>
          }
        />
      </b.Box>
    </b.Flex>
  );
};
