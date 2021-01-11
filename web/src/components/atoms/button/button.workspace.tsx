import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import * as b from "global/blocks";

/** assets */
import { RightArrow } from "assets/svg";

export const WorkspaceButton: React.FC<{
  name?: string;
  url?: string;
  color?: string;
}> = ({ name = "workspace", url, color = "red" }) => {
  const theme = useContext(ThemeContext);
  const [hovered, setHovered] = useState({
    launch: false,
  });

  return (
    <b.AnimatedBox
      p={4}
      borderBottom="1px solid"
      borderColor={theme.colors.white__dark}
      onMouseEnter={() => {
        setHovered({ ...hovered, launch: true });
      }}
      onMouseLeave={() => {
        setHovered({ ...hovered, launch: false });
      }}
    >
      <b.Flex alignItems="center" justifyContent="space-between">
        <b.Box mr={2}>
          <b.Flex alignItems="center">
            <b.Box mr={3}>
              <b.Box
                backgroundColor={color}
                width={50}
                height={50}
                borderRadius={8}
              >
                <b.Flex alignItems="center" justifyContent="center">
                  <b.Text
                    font-family="SlackLato-Bold"
                    font-size={18}
                    color={theme.colors.white}
                  >
                    {name.charAt(0).toUpperCase()}
                  </b.Text>
                </b.Flex>
              </b.Box>
            </b.Box>
            <b.Box>
              <b.Text
                fontFamily="CircularPro-Bold"
                fontSize={17}
                color={
                  hovered.launch ? theme.colors.blue : theme.colors.gray__dark
                }
              >
                {name}
              </b.Text>
            </b.Box>
          </b.Flex>
        </b.Box>
        <b.AnimatedBox
          variants={launchArrow}
          animate={hovered.launch ? "animate" : "initial"}
        >
          <RightArrow width={15} height={15} fill={theme.colors.blue} />
        </b.AnimatedBox>
      </b.Flex>
    </b.AnimatedBox>
  );
};

const launchArrow = {
  initial: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    x: 5,
    transition: {
      duration: 0.5,
    },
  },
};
