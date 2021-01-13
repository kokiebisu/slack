import React, { useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import * as b from "global/blocks";

export const NavButton: React.FC<{
  nav?: "why" | "solutions" | "resources";
}> = ({ nav = "why" }) => {
  const theme = useContext(ThemeContext);
  const [hovered, setHovered] = useState(false);

  const dropdowns = {
    why: {
      name: "Why",
      items: [
        { name: "Features", url: "/" },
        { name: "How it replaces email", url: "/" },
        { name: "Security", url: "/" },
        { name: "Customers", url: "/" },
      ],
    },
    solutions: {
      name: "Solutions",
      items: [
        { name: "Remote Work", url: "/" },
        { name: "Distance Learning", url: "/" },
        { name: "Engineering", url: "/" },
        { name: "Financial Services", url: "/" },
        { name: "Sales", url: "/" },
        { name: "IT", url: "/" },
        { name: "Marketing", url: "/" },
        { name: "Customer Support", url: "/" },
        { name: "Human Resources", url: "/" },
        { name: "Project Management", url: "/" },
        { name: "Media", url: "/" },
      ],
    },
    resources: {
      name: "Resources",
      items: [
        { name: "Resources Library", url: "/" },
        { name: "Slack Tips", url: "/" },
        { name: "Blog", url: "/" },
        { name: "Webinars", url: "/" },
        { name: "Slack Certified Program", url: "/" },
        { name: "Help Center", url: "/" },
        { name: "API", url: "/" },
        { name: "App Directory", url: "/" },
        { name: "Download", url: "/" },
      ],
    },
  };

  return (
    <b.AnimatedBox
      py={2}
      mx={4}
      border="none"
      backgroundColor="transparent"
      className={hovered ? "hovered" : undefined}
      onHoverStart={() => {
        setHovered(true);
      }}
      onHoverEnd={() => {
        setHovered(false);
      }}
    >
      <b.Text
        color={theme.colors.gray}
        fontSize={16}
        fontFamily="CircularPro-Book"
      >
        {dropdowns[nav].name}
      </b.Text>
      {hovered && (
        <b.Box
          width="250px"
          position="absolute"
          top={45}
          boxShadow="medium"
          py={4}
          px={6}
          borderRadius={3}
          backgroundColor={theme.colors.white}
        >
          {dropdowns[nav].items.map((dropdown, index) => {
            return (
              <b.Box py={2} key={index}>
                <Text
                  color={theme.colors.gray}
                  fontSize={16}
                  fontFamily="CircularPro-Book"
                >
                  {dropdown.name}
                </Text>
              </b.Box>
            );
          })}
        </b.Box>
      )}
    </b.AnimatedBox>
  );
};

const Text = styled(b.Text)`
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
