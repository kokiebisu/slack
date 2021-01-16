import { Button } from "components/atoms/button";
import * as b from "global/blocks";
import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";

export interface AccordionProps {
  type: string;
}

export const Accordion: React.FC<AccordionProps> = ({ type }) => {
  const theme = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);
  const types: { [type: string]: { icon: any; title: string } } = {
    channel: {
      icon: "#",
      title: "Channels here",
    },
    directMessage: {
      icon: <Button variant="avatar" />,
      title: "Direct messages",
    },
  };
  return (
    <b.Box height="100%">
      <b.Box>
        <Button
          block
          variant="accordion"
          title={types[type].title}
          onClick={() => setExpanded(!expanded)}
        />
      </b.Box>
      {expanded && (
        <b.Box px={22} py={2}>
          <b.Flex alignItems="center">
            <b.Box mr={3}>
              <b.Text
                fontSize={15}
                color={theme.colors.white__dark}
                fontFamily="SlackLato-Light"
              >
                {types[type].icon}
              </b.Text>
            </b.Box>
            <b.Box>
              <b.Text
                fontSize={15}
                color={theme.colors.white__dark}
                fontFamily="SlackLato-Light"
              >
                ran
              </b.Text>
            </b.Box>
          </b.Flex>
        </b.Box>
      )}
    </b.Box>
  );
};
