import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import * as b from "global/blocks";

export const NavButton: React.FC<{
  nav?: "why" | "solutions" | "resources";
}> = ({ nav = "why" }) => {
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
      <b.Text color="gray" fontSize={16} fontFamily="CircularPro-Book">
        {dropdowns[nav].name}
      </b.Text>
      {hovered && (
        <Dropdown position="absolute" borderRadius={3} backgroundColor="white">
          {dropdowns[nav].items.map((dropdown, index) => {
            return (
              <LinkWrapper py={2} key={index}>
                <b.Text
                  color="gray"
                  fontSize={16}
                  fontFamily="CircularPro-Book"
                >
                  {dropdown.name}
                </b.Text>
              </LinkWrapper>
            );
          })}
        </Dropdown>
      )}
    </b.AnimatedBox>
  );
};

const Dropdown = styled(b.Box)`
  width: 250px;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  top: 45px;
  padding: 13px 20px;
`;

const LinkWrapper = styled(b.Box)`
  &:hover {
    & p {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
