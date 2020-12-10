import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * Global
 */
import * as b from 'global/blocks';

/**
 * Props
 */
import { NavButtonProps } from './props';

export const NavButton: React.FC<NavButtonProps> = ({ nav = 'why' }) => {
  const [hovered, setHovered] = useState(false);

  const dropdowns = {
    why: {
      name: 'Why',
      items: [
        { name: 'Features', url: '/' },
        { name: 'How it replaces email', url: '/' },
        { name: 'Security', url: '/' },
        { name: 'Customers', url: '/' },
      ],
    },
    solutions: {
      name: 'Solutions',
      items: [
        { name: 'Remote Work', url: '/' },
        { name: 'Distance Learning', url: '/' },
        { name: 'Engineering', url: '/' },
        { name: 'Financial Services', url: '/' },
        { name: 'Sales', url: '/' },
        { name: 'IT', url: '/' },
        { name: 'Marketing', url: '/' },
        { name: 'Customer Support', url: '/' },
        { name: 'Human Resources', url: '/' },
        { name: 'Project Management', url: '/' },
        { name: 'Media', url: '/' },
      ],
    },
    resources: {
      name: 'Resources',
      items: [
        { name: 'Resources Library', url: '/' },
        { name: 'Slack Tips', url: '/' },
        { name: 'Blog', url: '/' },
        { name: 'Webinars', url: '/' },
        { name: 'Slack Certified Program', url: '/' },
        { name: 'Help Center', url: '/' },
        { name: 'API', url: '/' },
        { name: 'App Directory', url: '/' },
        { name: 'Download', url: '/' },
      ],
    },
  };

  return (
    <Wrapper
      className={hovered ? 'hovered' : undefined}
      onHoverStart={() => {
        setHovered(true);
      }}
      onHoverEnd={() => {
        setHovered(false);
      }}>
      <b.Text>{dropdowns[nav].name}</b.Text>
      {hovered && (
        <Dropdown>
          {dropdowns[nav].items.map((dropdown, index) => {
            return (
              <LinkWrapper key={index}>
                <b.Text>{dropdown.name}</b.Text>
              </LinkWrapper>
            );
          })}
        </Dropdown>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: relative;
  border: none;
  background-color: transparent;
  padding: 12px 0px;
  margin: 0px 15px;
  font-size: 16px;
  cursor: pointer;
  font-family: 'CircularPro-Book';

  /* &.hovered {
    padding-bottom: 30px;
    padding-right: 10px;
  } */

  & p {
    color: ${({ theme }) => theme.colors.gray};
  }

  & > a {
    text-decoration: none;
  }
`;

const Dropdown = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 45px;
  padding: 13px 20px;
  border-radius: 5px;
`;

const LinkWrapper = styled.div`
  padding: 8px 0;
  display: flex;
  & p {
    color: ${({ theme }) => theme.colors.gray};
  }

  & > a {
    text-decoration: none;
  }

  &:hover {
    & p {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
