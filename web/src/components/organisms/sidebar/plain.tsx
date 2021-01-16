import { BottomArrow } from "assets/svg";
import { Button } from "components/atoms/button";
import * as b from "global/blocks";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Accordion } from "components/organisms/accordion";

export const PlainSidebar: React.FC<{ label?: string }> = ({ label }) => {
  const theme = useContext(ThemeContext);
  return (
    <b.Box
      height="100%"
      bg={theme.colors.primary}
      border="1px solid"
      borderColor={theme.colors.primary__light}
    >
      <b.Box
        px={3}
        py={14}
        bg={theme.colors.primary}
        borderBottom="1px solid"
        borderColor={theme.colors.primary__lighter}
      >
        <b.Flex justifyContent="space-between">
          <b.Box>
            <b.Flex alignItems="center">
              <b.Box mr={2}>
                <b.Text
                  color={theme.colors.white}
                  fontSize={13}
                  fontFamily="SlackLato-Bold"
                >
                  {label}
                </b.Text>
              </b.Box>
              <b.Box>
                <BottomArrow width={10} height={10} fill={theme.colors.white} />
              </b.Box>
            </b.Flex>
          </b.Box>
          <b.Box>
            <Button variant="new" />
          </b.Box>
        </b.Flex>
      </b.Box>
      <b.Box py={4}>
        <Accordion type="channel" />
      </b.Box>
      <b.Box pb={10}>
        <Accordion type="directMessage" />
      </b.Box>
    </b.Box>
  );
};
